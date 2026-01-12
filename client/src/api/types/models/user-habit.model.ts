import type { DayOfWeek, HabitStatus, RepeatTime } from "../enums";

export interface UserHabit {
  id: string;
  title: string;
  description: string;
  repeatType: RepeatTime;
  days: DayOfWeek[];
  isCompletedToday: boolean;
  logs: Record<string, HabitStatus>;
  color: string;
  icon: string;
}
