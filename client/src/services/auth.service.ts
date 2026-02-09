import { instance } from "../api/axios";
import type { AuthResponseDto } from "../api/types/dtos/auth/auth-response.dto";
import type { ForgotPasswordRequestDto } from "../api/types/dtos/auth/forgot-password.dto";
import type { LoginDto } from "../api/types/dtos/auth/login.dto";
import type { RegisterDto } from "../api/types/dtos/auth/register.dto";
import type { ResetPasswordRequestDto } from "../api/types/dtos/auth/reset-password.dto";
import type { UpdatePasswordDto } from "../api/types/dtos/auth/update-password.dto.ts";
import type { GenericResponseDto } from "../api/types/dtos/generic-response.dto";
import type { UserResponseDto } from "../api/types/dtos/user/user-response.dto";
import type { User } from "../api/types/models/user.model";
import { UserMapper } from "../utils/mappers/user.mapper";

export const authService = {
  async register(data: RegisterDto): Promise<AuthResponseDto> {
    const { data: responseData } = await instance.post<AuthResponseDto>(
      "/auth/register",
      data,
    );
    return responseData;
  },

  async login(data: LoginDto): Promise<AuthResponseDto> {
    const { data: responseData } = await instance.post<AuthResponseDto>(
      "/auth/login",
      data,
    );
    return responseData;
  },

  async logout(): Promise<void> {
    return instance.post("/auth/logout");
  },

  async getMe(): Promise<User> {
    const { data } = await instance.get<UserResponseDto>("/auth/me");
    return UserMapper.toDomain(data);
  },

  async forgotPassword(
    data: ForgotPasswordRequestDto,
  ): Promise<GenericResponseDto> {
    const response = await instance.post<GenericResponseDto>(
      "/auth/forgotPassword",
      data,
    );
    return response.data;
  },

  async resetPassword(
    token: string,
    data: ResetPasswordRequestDto,
  ): Promise<GenericResponseDto> {
    const response = await instance.post<GenericResponseDto>(
      `/auth/resetPassword/${token}`,
      data,
    );
    return response.data;
  },

  async updatePassword(data: UpdatePasswordDto): Promise<AuthResponseDto> {
    const response = await instance.post<AuthResponseDto>(
      "/auth/updatePassword",
      data,
    );
    return response.data;
  },

  loginWithGoogle(): void {
    window.location.href = "http://localhost:3000/auth/google";
  },
};
