import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Username must be atleast 6 characters long' })
  username?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Invalid email format' })
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50, { message: 'First name is too long' })
  firstName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50, { message: 'First name is too long' })
  lastName?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
