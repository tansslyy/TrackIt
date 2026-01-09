import { IsEmail, IsNotEmpty } from 'class-validator';
import { validationOptionsMsg } from 'src/common/utils';

export class ForgotPasswordDTO {
  @IsEmail({}, validationOptionsMsg('Emails must be an email address'))
  @IsNotEmpty(validationOptionsMsg('Email cannot be empty '))
  email: string;
}
