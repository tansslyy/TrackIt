export interface HabitDetailsDto {
  id: string;
  name: string;
  description: string | null;
  isDefault: boolean;
  categoryId: string | null;
}
