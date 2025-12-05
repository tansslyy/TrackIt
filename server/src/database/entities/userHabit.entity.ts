export class UserHabitEntity {
  id: string;
  userId: string;
  habitId: string;
  interval?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
}
