import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class LibraryItemDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  description: string | null;

  @Expose()
  isDefault: boolean;
}
