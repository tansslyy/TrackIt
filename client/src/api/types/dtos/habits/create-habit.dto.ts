import type { DayOfWeek, RepeatTime } from "../../enums";

export interface CreateHabitDto {
  name?: string;
  habitId?: string;
  description?: string;
  repeatType: RepeatTime;
  days?: DayOfWeek[];
  color?: string;
  icon?: string;
}
