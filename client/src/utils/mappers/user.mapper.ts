import type { UserResponseDto } from "../../api/types/dtos/user/user-response.dto";
import type { User } from "../../api/types/models/user.model";

export class UserMapper {
  static toDomain(dto: UserResponseDto): User {
    return {
      id: dto.id,
      email: dto.email,
      username: dto.username,
      firstName: dto.firstName,
      lastName: dto.lastName,
      avatarUrl: dto.avatarUrl,
      displayName: dto.username || dto.firstName || dto.email.split("@")[0],
      createdAt: new Date(dto.createdAt),
    };
  }
}
