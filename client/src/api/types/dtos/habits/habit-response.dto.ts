import type { RepeatTime } from "../../enums";
import type { HabitDetailsDto } from "./habit-details.dto";
import type { HabitLogDto } from "./habit-log.dto";
import type { HabitDayDto } from "./habitDay.dto";

export interface HabitResponseDto {
  id: string;
  habitdId: string;
  userId: string;
  repeatType: RepeatTime;
  interval?: number;
  startDate?: string;
  endDate?: string;

  habit: HabitDetailsDto;
  logs?: HabitLogDto[];
  days: HabitDayDto[];
}
