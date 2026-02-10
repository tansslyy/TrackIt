import { IsString, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsString()
  @MinLength(6, { message: 'Password is too short' })
  oldPassword: string;

  @IsString()
  @MinLength(6, { message: 'Password is too short' })
  newPassword: string;
}
