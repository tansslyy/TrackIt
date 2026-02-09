export class CreateUserDto {
  email: string;
  username?: string;
  password?: string;
  passwordHash?: string;

  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  provider?: string;
}
