export interface UserResponseDto {
  id: string;
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  provider?: string;
  createdAt: string;
  updatedAt: string;
}
