import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
import { UserEntity } from '../entities';

const prisma = new PrismaService();

@Injectable()
export class UserRepository extends BaseRepository<any> {
  constructor(prisma: PrismaService) {
    super('user', prisma);
  }

  async findByEmail(email: string) {
    return this.prisma['user'].findUnique({ where: email });
  }

  async findByUsername(username: string) {
    return this.prisma['user'].findUnique({ where: username });
  }
}
