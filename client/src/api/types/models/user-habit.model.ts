import type { DayOfWeek, HabitStatus, RepeatTime } from "../enums";

export interface UserHabit {
  id: string;
  habitId: string;

  title: string;
  description: string;
  startDate: string;

  repeatType: RepeatTime;
  activeDays: DayOfWeek[];

  isCompletedToday: boolean;
  logs: Record<string, HabitStatus>;

  color?: string;
  icon?: string;
}
