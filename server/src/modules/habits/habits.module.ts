import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UserHabitRepository } from 'src/database/repositories/user-habit.repository';
import { HabitRepository } from 'src/database/repositories/habit.repository';
import { HabitLogRepository } from 'src/database/repositories/habit-log.repository';

@Module({
  controllers: [HabitsController],
  providers: [
    HabitsService,
    PrismaService,
    UserHabitRepository,
    HabitRepository,
    HabitLogRepository,
  ],
})
export class HabitsModule {}
