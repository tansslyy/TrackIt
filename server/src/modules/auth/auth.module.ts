import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from 'src/database/repositories/user.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'supersecret',
      signOptions: { expiresIn: '7d' },
    }),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
