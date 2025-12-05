import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
import { UserEntity } from '../entities';
import { User } from 'generated/prisma';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(prisma: PrismaService) {
    super(prisma.user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.delegate.findUnique({ where: { email } });
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    return this.delegate.findUnique({ where: { username } });
  }
}
