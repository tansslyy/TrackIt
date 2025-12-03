import { Injectable } from '@nestjs/common';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super(prisma.category);
  }

  async findByName(name: string) {
    return this.delegate.findUnique({ where: { name } });
  }
}
