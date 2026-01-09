import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
import { RefreshToken as RefreshTokenModel } from '@prisma/client';

@Injectable()
export class RefreshTokenRepository extends BaseRepository<RefreshTokenModel> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.refreshToken);
  }

  async findByUserId(userId: string): Promise<RefreshTokenModel | null> {
    return this.prisma.refreshToken.findUnique({
      where: { userId },
    });
  }

  async updateByUserId(
    userId: string,
    token: string,
  ): Promise<RefreshTokenModel> {
    return this.prisma.refreshToken.update({
      where: { userId },
      data: { hashedToken: token },
    });
  }

  async deleteByUserId(userId: string): Promise<RefreshTokenModel> {
    return this.prisma.refreshToken.delete({ where: { userId } });
  }
}
