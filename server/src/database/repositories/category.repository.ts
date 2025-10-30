import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super('category', prisma);
  }

  async findByName(name: string) {
    return this.prisma['category'].findUnique({ where: { name } });
  }
}
