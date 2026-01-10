import type { Habit } from "./habit";
import type { HabitLog } from "./habit.-log";

export interface UserHabit {
  id: string;
  userId: string;
  habitId: string;
  repeatType: "DAILY" | "CUSTOM";

  habit: Habit;
  logs: HabitLog[];
}
