import type { RepeatTime } from "../../enums";
import type {
  HabitDayFragment,
  HabitLogFragment,
  HabitMetaFragment,
} from "../../fragments/fragments";

export interface HabitResponseDto {
  id: string;
  habitdId: string;
  userId: string;

  repeatType: RepeatTime;
  startDate?: string;
  endDate?: string | null;
  currentStreak?: number;

  habit: HabitMetaFragment;
  logs?: HabitLogFragment[];
  days: HabitDayFragment[];
  deletedAt?: string | null;
}
