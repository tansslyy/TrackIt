export class UserEntity {
  id: string;
  username?: string | null;
  email: string;
  passwordHash?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  avatarUrl?: string | null;
  provider?: string;
  createdAt: Date;
  deletedAt?: Date | null;
}
