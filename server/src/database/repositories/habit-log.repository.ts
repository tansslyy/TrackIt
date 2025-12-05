import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class HabitLogRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super(prisma.habitLog);
  }

  async findByUserHabit(userHabitId: string) {
    return this.delegate.findMany({ where: { userHabitId } });
  }
}
