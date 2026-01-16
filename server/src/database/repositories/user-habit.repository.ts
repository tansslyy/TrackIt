import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserHabitRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super(prisma.userHabit);
  }

  async findByUser(userId: string) {
    return this.delegate.findMany({ where: { userId } });
  }

  async findAllActive(userId: string) {
    return this.delegate.findMany({
      where: { userId, deletedAt: null, habit: { deletedAt: null } },
      include: { habit: true, days: true, logs: true },
    });
  }

  async findByIdWithRelations(id: string) {
    return this.delegate.findUnique({
      where: { id },
      include: { habit: true, days: true },
    });
  }

  async findDaily(userId: string, targetDate: Date, dayOfWeek: string) {
    return this.delegate.findMany({
      where: {
        userId,
        deletedAt: null,
        startDate: { lte: targetDate },
        OR: [
          { repeatType: 'DAILY' },
          {
            repeatType: 'CUSTOM',
            days: { some: { dayOfWeek: dayOfWeek as any } },
          },
        ],
      },
      include: {
        habit: true,
        logs: {
          where: { date: targetDate },
        },
      },
    });
  }

  async findByPeriod(userId: string, start: Date, end: Date) {
    return this.delegate.findMany({
      where: {
        userId: userId,
        startDate: { lte: end },
        OR: [{ deletedAt: null }, { deletedAt: { gt: start } }],
      },
      include: {
        habit: true,
        logs: {
          where: {
            date: { gte: start, lte: end },
          },
          orderBy: { date: 'asc' },
        },
        days: true,
      },
    });
  }
}
