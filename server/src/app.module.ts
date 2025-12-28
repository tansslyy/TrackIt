import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/user.module';
import { HabitsModule } from './modules/habits/habits.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    PrismaModule,
    UsersModule,
    HabitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
