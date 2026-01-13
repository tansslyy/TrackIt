import type { LibraryItemDto } from "./library-response.dto";

export interface LibraryCategoryDto {
  id: string;
  name: string;
  habit: LibraryItemDto[];
}
