import type { DayOfWeek, HabitStatus, RepeatTime } from "../../enums";

export interface HabitResponseDto {
  id: string;
  habitdId: string;
  userId: string;
  repeatType: RepeatTime;
  interval?: number;
  startDate?: string;
  endDate?: string;

  habit: {
    id: string;
    name: string;
    description: string | null;
    isDefault: boolean;
    categoryId: string | null;
  };

  logs?: Array<{
    id: string;
    date: string;
    status: HabitStatus;
  }>;

  days: Array<{
    dayOfWeek: DayOfWeek;
  }>;
}
