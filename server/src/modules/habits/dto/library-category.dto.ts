import { Exclude, Expose } from 'class-transformer';
import { LibraryItemDto } from './library-response.dto';

@Exclude()
export class LibraryCategoryDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  habit: LibraryItemDto[];
}
