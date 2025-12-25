import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HabitsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateHabitDto) {
    return this.prisma.$transaction(async (tx) => {
      let habitId = dto.habitId;

      if (!habitId) {
        if (!dto.name) {
          throw new Error('Name is required for custom habits');
        }

        const newHabit = await tx.habit.create({
          data: {
            name: dto.name,
            description: dto.description,
            isDefault: false,
          },
        });
        habitId = newHabit.id;
      }

      const userHabit = await tx.userHabit.create({
        data: {
          userId: userId,
          habitId: habitId!,
          repeatType: dto.repeatType,
          startDate: new Date(),
          days: dto.days?.length
            ? {
                create: dto.days.map((day) => ({ dayOfWeek: day })),
              }
            : undefined,
        },
        include: {
          habit: true,
          days: true,
        },
      });

      return userHabit;
    });
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
