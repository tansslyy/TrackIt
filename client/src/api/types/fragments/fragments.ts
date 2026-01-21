import type { DayOfWeek, HabitStatus } from "../enums";

export interface HabitMetaFragment {
  id: string;
  name: string;
  description: string | null;
  isDefault: boolean;
  categoryId?: string | null;
}
export interface HabitLogFragment {
  id: string;
  date: string;
  status: HabitStatus;
}
export interface HabitDayFragment {
  id: string;
  dayOfWeek: DayOfWeek;
}
