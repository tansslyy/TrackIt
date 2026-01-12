import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/database/prisma.service';
import { DayOfWeek } from '@prisma/client';

@Injectable()
export class HabitsService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrLinkHabit(userId: string, dto: CreateHabitDto) {
    if (dto.habitId) {
      return this.linkHabitToUser(userId, dto);
    }

    if (!dto.name) {
      throw new BadRequestException('Habit name is required');
    }

    let habit = await this.prisma.habit.findFirst({
      where: {
        name: dto.name,
        isDefault: false,
      },
    });

    if (!habit) {
      habit = await this.prisma.habit.create({
        data: {
          name: dto.name,
          description: dto.description,
          isDefault: false,
        },
      });
    }

    return this.prisma.userHabit.create({
      data: {
        userId: userId,
        habitId: habit.id,
        repeatType: dto.repeatType || 'DAILY',
        startDate: new Date(),
        days: dto.days?.length
          ? { create: dto.days.map((day) => ({ dayOfWeek: day })) }
          : undefined,
      },
      include: {
        habit: true,
        days: true,
      },
    });
  }

  async linkHabitToUser(userId: string, dto: CreateHabitDto) {
    if (!dto.habitId) {
      throw new BadRequestException('HabitId is required for binding');
    }

    return this.prisma.userHabit.create({
      data: {
        userId: userId,
        habitId: dto.habitId,
        repeatType: dto.repeatType,
        startDate: new Date(),
        days: dto.days?.length
          ? { create: dto.days.map((day) => ({ dayOfWeek: day })) }
          : undefined,
      },
      include: {
        habit: true,
        days: true,
      },
    });
  }

  async toggleCompletion(userId: string, habitId: string) {
    const userHabit = await this.prisma.userHabit.findUnique({
      where: { id: habitId },
      include: { habit: true },
    });

    if (!userHabit || userHabit.userId !== userId) {
      throw new BadRequestException('Habit not found or access denied');
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingLog = await this.prisma.habitLog.findFirst({
      where: {
        userHabitId: habitId,
        date: today,
      },
    });

    if (existingLog) {
      await this.prisma.habitLog.delete({
        where: { id: existingLog.id },
      });
      return { status: 'UNCOMPLETED', message: 'Execution canceled' };
    } else {
      await this.prisma.habitLog.create({
        data: {
          userHabitId: habitId,
          date: today,
          status: 'COMPLETED',
          createdAt: new Date(),
        },
      });
      return { status: 'COMPLETED', message: 'Habit completed!' };
    }
  }

  async findAll(userId: string) {
    return this.prisma.userHabit.findMany({
      where: { userId, deletedAt: null, habit: { deletedAt: null } },
      include: {
        habit: true,
        days: true,
        logs: {
          where: {
            date: {
              gte: new Date(new Date().setHours(0, 0, 0, 0)),
            },
          },
        },
      },
    });
  }

  async findLibrary() {
    return this.prisma.category.findMany({
      include: {
        habit: {
          where: { isDefault: true },
        },
      },
      where: {
        habit: {
          some: {
            isDefault: true,
          },
        },
      },
    });
  }

  async findToday(userId: string) {
    const today = new Date();
    const dayOfWeek = today
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toUpperCase();

    return this.prisma.userHabit.findMany({
      where: {
        userId: userId,
        deletedAt: null,
        OR: [
          { repeatType: 'DAILY' },
          {
            repeatType: 'CUSTOM',
            days: {
              some: {
                dayOfWeek: dayOfWeek as any,
              },
            },
          },
        ],
      },
      include: {
        habit: true,
        logs: {
          where: {
            date: {
              gte: new Date(new Date().setHours(0, 0, 0, 0)),
            },
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} habit`;
  }

  async update(userId: string, habitId: string, dto: UpdateHabitDto) {
    const userHabit = await this.prisma.userHabit.findUnique({
      where: { id: habitId },
      include: { habit: true },
    });

    if (!userHabit || userHabit.userId !== userId) {
      throw new BadRequestException('Access denied');
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.userHabit.update({
        where: { id: habitId },
        data: {
          repeatType: dto.repeatType,
          days: dto.days
            ? {
                deleteMany: {},
                create: dto.days.map((day) => ({ dayOfWeek: day })),
              }
            : undefined,
        },
      });

      if (!userHabit.habit.isDefault && (dto.name || dto.description)) {
        await tx.habit.update({
          where: { id: userHabit.habitId },
          data: {
            name: dto.name,
            description: dto.description,
          },
        });
      }

      return tx.userHabit.findUnique({
        where: { id: habitId },
        include: { habit: true, days: true },
      });
    });
  }

  async remove(userId: string, habitId: string) {
    const userHabit = await this.prisma.userHabit.findUnique({
      where: { id: habitId },
    });

    if (!userHabit || userHabit.deletedAt) {
      throw new BadRequestException('No habit found with this ID');
    }

    if (userHabit.userId !== userId) {
      throw new BadRequestException('You do not have access to this habit');
    }

    return this.prisma.userHabit.update({
      where: { id: habitId },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
