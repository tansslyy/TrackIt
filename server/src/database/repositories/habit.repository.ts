import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';

@Injectable()
export class HabitRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super(prisma.habit);
  }

  async findByName(name: string) {
    return this.delegate.findUnique({ where: { name } });
  }
}
