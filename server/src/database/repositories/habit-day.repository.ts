import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class HabitDayRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super('habitDay', prisma);
  }

  async findByUserHabit(userHabitId: string) {
    return this.prisma['habitDay'].findMany({ where: { userHabitId } });
  }
}
