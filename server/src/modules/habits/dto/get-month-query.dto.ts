import { IsOptional, IsString, Matches } from 'class-validator';

export class GetMonthQueryDto {
  @IsOptional()
  @IsString()
  // @Matches(/^\d{4}-\d{2}$/, { message: 'Format must be YYYY-MM' })
  date: string;
}
