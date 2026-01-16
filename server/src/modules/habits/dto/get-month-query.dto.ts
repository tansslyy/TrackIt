import { IsOptional, IsString, Matches } from 'class-validator';

export class GetMonthQueryDto {
  @IsOptional()
  @IsString()
  date: string;
}
