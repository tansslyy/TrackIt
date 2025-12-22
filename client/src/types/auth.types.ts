export interface RegisterDto {
  username: string;
  email: string;
  password: string;
}

export interface LoginDto {
  username: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthResponse {
  message: string;
}
