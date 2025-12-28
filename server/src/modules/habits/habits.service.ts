import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HabitsService {
  constructor(private readonly prisma: PrismaService) {}

  async createHabit(dto: CreateHabitDto) {
    if (!dto.name) {
      throw new BadRequestException('Habit name is required');
    }

    return this.prisma.habit.create({
      data: {
        name: dto.name,
        description: dto.description,
        isDefault: false,
      },
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
