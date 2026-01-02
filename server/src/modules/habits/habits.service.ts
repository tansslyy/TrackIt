import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/database/prisma.service';

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

    // розумний рошук, спочаиткут шукаємо чи є вже така звичка
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
      where: { userId, habit: { deletedAt: null } },
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

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}
