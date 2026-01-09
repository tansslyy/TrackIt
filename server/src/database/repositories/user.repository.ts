import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
import { UserEntity } from '../entities';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private prisma: PrismaService) {
    super(prisma.user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.delegate.findUnique({ where: { email } });
  }

  async find(where: Prisma.UserWhereInput): Promise<UserEntity | null> {
    return this.prisma.user.findFirst({ where });
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return this.delegate.findUnique({ where: { username } });
  }
}
