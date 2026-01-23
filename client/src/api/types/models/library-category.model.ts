import type { LibraryHabit } from "./library-habit.model";

export interface LibraryCategoryModel {
  id: string;
  name: string;
  habits: LibraryHabit[];
}
