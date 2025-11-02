import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserHabitRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super('userHabit', prisma);
  }

  async findByUser(userId: string) {
    return this.prisma['userHabit'].findMany({ where: { userId } });
  }
}
