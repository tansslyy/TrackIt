export interface CreateHabitDto {
  name?: string;
  habitId?: string;
  repeatType: "DAILY" | "CUSTOM";
  days?: string[];
}
