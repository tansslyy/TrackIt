import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { UserHabitRepository } from './repositories/user-habit.repository';
import { BaseRepository } from './repositories/base.repository';
import { CategoryRepository } from './repositories/category.repository';
import { HabitDayRepository } from './repositories/habit-day.repository';
import { HabitLogRepository } from './repositories/habit-log.repository';
import { HabitRepository } from './repositories/habit.repository';
import { RefreshTokenRepository } from './repositories/refresh-token.repository';
import { EmailTokenRepository } from './repositories/email-token.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    UserHabitRepository,
    BaseRepository,
    CategoryRepository,
    HabitDayRepository,
    HabitLogRepository,
    HabitRepository,
    RefreshTokenRepository,
    EmailTokenRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    UserHabitRepository,
    BaseRepository,
    CategoryRepository,
    HabitDayRepository,
    HabitLogRepository,
    HabitRepository,
    RefreshTokenRepository,
    EmailTokenRepository,
  ],
})
export class PrismaModule {}
