import { DayOfWeek, RepeatTime } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateHabitDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUUID()
  @IsOptional()
  habitId?: string;

  @IsEnum(RepeatTime)
  repeatType: RepeatTime;

  @IsArray()
  @IsOptional()
  @IsEnum(DayOfWeek, { each: true })
  days?: DayOfWeek[];
}
