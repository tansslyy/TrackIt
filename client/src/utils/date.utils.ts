import { getDate } from "date-fns";
import { DayOfWeek } from "../api/types/enums";

const DAY_INDEX_MAP: DayOfWeek[] = [
  DayOfWeek.SUNDAY,
  DayOfWeek.MONDAY,
  DayOfWeek.TUESDAY,
  DayOfWeek.WEDNESDAY,
  DayOfWeek.THURSDAY,
  DayOfWeek.FRIDAY,
  DayOfWeek.SATURDAY,
];

export const getDayOfWeekFromDate = (date: Date): DayOfWeek => {
  const index = getDate(date);
  return DAY_INDEX_MAP[index];
};
