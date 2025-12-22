import type { LoginDto, RegisterDto } from "../types/auth.types";
import api, { instance } from "../api/axios";

export const authService = {
  async register(data: RegisterDto) {
    return api.post("/auth/register", data);
  },

  async login(data: LoginDto) {
    return api.post("/auth/login", data);
  },
  async logout() {
    return api.post("/auth/logout");
  },
  async getMe() {
    const { data } = await instance.get("/auth/me");
    return data;
  },
};
