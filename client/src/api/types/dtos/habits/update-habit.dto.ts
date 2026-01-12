import type { CreateHabitDto } from "./create-habit.dto";

export interface UpdateHabitDto extends Partial<CreateHabitDto> {}
