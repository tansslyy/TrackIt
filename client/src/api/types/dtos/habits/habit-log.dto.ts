import type { HabitStatus } from "../../enums";

export interface HabitLogDto {
  id: string;
  date: string;
  status: HabitStatus;
}
