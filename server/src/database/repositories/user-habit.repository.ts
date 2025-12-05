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
}
