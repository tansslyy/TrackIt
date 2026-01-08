import api, { instance } from "../api/axios";
import type { LoginDto } from "../types/dtos/auth/login.dto";
import type { RegisterDto } from "../types/dtos/auth/register.dto";

export const authService = {
  async register(data: RegisterDto) {
    const { data: responseData } = await instance.post("/auth/register", data);
    return responseData;
  },

  async login(data: LoginDto) {
    const { data: responseData } = await instance.post("/auth/login", data);
    return responseData;
  },
  async logout() {
    return instance.post("/auth/logout");
  },
  async getMe() {
    const { data } = await instance.get("/auth/me");
    return data;
  },
};
