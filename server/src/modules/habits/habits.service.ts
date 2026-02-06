import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/database/prisma.service';
import { DayOfWeek } from '@prisma/client';
import { GetMonthQueryDto } from './dto/get-month-query.dto';
import { HabitRepository } from 'src/database/repositories/habit.repository';
import { HabitLogRepository } from 'src/database/repositories/habit-log.repository';
import { UserHabitRepository } from 'src/database/repositories/user-habit.repository';
import {
  getDayName,
  getEndOfMonth,
  getStartOfDay,
  getStartOfMonth,
} from 'src/common/utils/date.utils';
import { calculateCurrentStreak } from 'src/common/utils/streak.utils';

@Injectable()
export class HabitsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userHabitRepo: UserHabitRepository,
    private readonly habitRepo: HabitRepository,
    private readonly habitLogRepo: HabitLogRepository,
  ) {}

  async createOrLinkHabit(userId: string, dto: CreateHabitDto) {
    if (dto.habitId) {
      return this.linkHabitToUser(userId, dto);
    }

    if (!dto.name) {
      throw new BadRequestException('Habit name is required');
    }

    let habit = await this.habitRepo.findByName(dto.name);

    if (!habit) {
      habit = await this.habitRepo.create({
        name: dto.name,
        description: dto.description,
        isDefault: false,
      });
    }

    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);

    const userHabitData = {
      userId: userId,
      habitId: habit.id,
      repeatType: dto.repeatType || 'DAILY',
      startDate: new Date(),
      days: dto.days?.length
        ? { create: dto.days.map((day) => ({ dayOfWeek: day })) }
        : undefined,
    };

    return this.userHabitRepo.create(userHabitData);
  }

  async linkHabitToUser(userId: string, dto: CreateHabitDto) {
    if (!dto.habitId) {
      throw new BadRequestException('HabitId is required for binding');
    }

    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    const userHabitData = {
      userId: userId,
      habitId: dto.habitId,
      repeatType: dto.repeatType,
      startDate: startDate,
      days: dto.days?.length
        ? { create: dto.days.map((day) => ({ dayOfWeek: day })) }
        : undefined,
    };
    return this.userHabitRepo.create(userHabitData);
  }

  async toggleCompletion(userId: string, habitId: string, dateStr?: string) {
    const userHabit = await this.userHabitRepo.findByIdWithRelations(habitId);

    if (!userHabit || userHabit.userId !== userId) {
      throw new BadRequestException('Habit not found or access denied');
    }

    const targetDate = dateStr ? new Date(dateStr) : new Date();
    targetDate.setHours(0, 0, 0, 0);

    const reallyToday = new Date();
    reallyToday.setHours(0, 0, 0, 0);

    if (targetDate > reallyToday) {
      throw new BadRequestException(
        'Cannot toggle completion for future dates',
      );
    }

    const existingLog = await this.habitLogRepo.findBydate(habitId, targetDate);

    if (existingLog) {
      await this.habitLogRepo.delete(existingLog.id);
      return { status: 'UNCOMPLETED', message: 'Execution canceled' };
    } else {
      await this.habitLogRepo.create({
        userHabitId: habitId,
        date: targetDate,
        status: 'COMPLETED',
      });
      return { status: 'COMPLETED', message: 'Habit completed!' };
    }
  }

  async findAll(userId: string) {
    const habits = await this.userHabitRepo.findAllActive(userId);
    return habits.map((habit) => ({
      ...habit,
      currentStreak: calculateCurrentStreak(habit.logs),
    }));
  }

  async findMonth(userId: string, query: GetMonthQueryDto) {
    const startOfMonth = getStartOfMonth(query.date);
    const endOfMonth = getEndOfMonth(query.date);

    return this.userHabitRepo.findByPeriod(userId, startOfMonth, endOfMonth);
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

  async findDaily(userId: string, query: GetMonthQueryDto) {
    const targetDate = query.date ? new Date(query.date) : new Date();
    targetDate.setHours(0, 0, 0, 0);

    const dayOfWeek = targetDate
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toUpperCase() as DayOfWeek;

    const habits = await this.userHabitRepo.findDaily(
      userId,
      targetDate,
      dayOfWeek,
    );

    return habits.map((habit) => ({
      ...habit,
      currentStreak: calculateCurrentStreak(habit.logs),
    }));
  }

  async findOne(id: string) {
    const habit = await this.userHabitRepo.findByIdWithRelations(id);
    if (!habit) {
      throw new NotFoundException(`Habit with ID ${id} not found`);
    }
    return { ...habit, currentStreak: calculateCurrentStreak(habit.logs) };
  }

  async update(userId: string, habitId: string, dto: UpdateHabitDto) {
    const userHabit = await this.userHabitRepo.findByIdWithRelations(habitId);

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
    const userHabit = await this.userHabitRepo.findById(habitId);

    if (!userHabit || userHabit.deletedAt) {
      throw new BadRequestException('No habit found with this ID');
    }

    if (userHabit.userId !== userId) {
      throw new BadRequestException('You do not have access to this habit');
    }

    return this.userHabitRepo.update(habitId, {
      deletedAt: new Date(),
    });
  }

  async getUserStats(userId: string) {
    const habits = await this.userHabitRepo.findAllActive(userId);
    const totalHabits = habits.length;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const completedToday = habits.filter((h) =>
      h.logs.some((l) => {
        const logDate = new Date(l.date);
        logDate.setHours(0, 0, 0, 0);
        return (
          logDate.getTime() === today.getTime() && l.status === 'COMPLETED'
        );
      }),
    ).length;

    const streaks = habits.map((h) => calculateCurrentStreak(h.logs));
    const bestStreak = streaks.length > 0 ? Math.max(...streaks) : 0;

    return { totalHabits, completedToday, bestStreak };
  }
}
