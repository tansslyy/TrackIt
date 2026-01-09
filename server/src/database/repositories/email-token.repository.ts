import { EmailToken, Prisma, TokenType } from '@prisma/client';
import { BaseRepository } from './base.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailTokenRepository extends BaseRepository<EmailToken> {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.emailToken);
  }

  async create(data: Prisma.EmailTokenCreateInput): Promise<EmailToken> {
    return this.prisma.emailToken.create({ data });
  }

  async findByToken(token: string): Promise<EmailToken | null> {
    return this.prisma.emailToken.findUnique({
      where: { token },
    });
  }

  async find(params: {
    email: string;
    type: TokenType;
  }): Promise<EmailToken | null> {
    return this.prisma.emailToken.findFirst({
      where: {
        email: params.email,
        type: params.type,
      },
    });
  }

  async delete(token: string): Promise<EmailToken> {
    return this.prisma.emailToken.delete({ where: { token } });
  }
}
