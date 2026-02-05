import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';
import { HabitLog } from '@prisma/client';

@Injectable()
export class HabitLogRepository extends BaseRepository<HabitLog> {
  constructor(prisma: PrismaService) {
    super(prisma.habitLog);
  }

  async findByUserHabit(userHabitId: string) {
    return this.delegate.findMany({
      where: { userHabitId },
      orderBy: { date: 'desk' },
    });
  }

  async findBydate(userHabitId: string, date: Date) {
    return this.delegate.findFirst({
      where: { userHabitId, date: date },
    });
  }
}
