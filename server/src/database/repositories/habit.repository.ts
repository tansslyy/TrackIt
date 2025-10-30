import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';

@Injectable()
export class HabitRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super('habit', prisma);
  }

  async findByName(name: string) {
    return this.prisma['habit'].findUnique({ where: { name } });
  }
}
