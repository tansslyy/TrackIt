import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/auth.service";
import type { RegisterDto } from "../api/types/dtos/auth/register.dto";
import type { LoginDto } from "../api/types/dtos/auth/login.dto";
import type { User } from "../api/types/models/user.model";
import type { UpdatePasswordDto } from "../api/types/dtos/auth/update-password.dto.ts";
import { data } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  isLoading: boolean;
  login: (data: LoginDto) => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
  logout: () => void;
  updatePassword: (data: UpdatePasswordDto) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const UserData = await authService.getMe();
        setUser(UserData);
      } catch (error) {
        localStorage.removeItem("accessToken");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (data: LoginDto) => {
    const response = await authService.login(data);

    if (response.accessToken) {
      localStorage.setItem("accessToken", response.accessToken);
    }

    const userData = await authService.getMe();
    setUser(userData);
  };

  const register = async (data: RegisterDto) => {
    const response = await authService.register(data);

    if (response.accessToken) {
      localStorage.setItem("accessToken", response.accessToken);
    }

    const userData = await authService.getMe();
    setUser(userData);
  };

  const updatePassword = async (data: UpdatePasswordDto) => {
    const response = await authService.updatePassword(data);

    if (response.accessToken) {
      localStorage.setItem("accessToken", response.accessToken);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (e) {
      console.error('"Logout error on server', e);
    } finally {
      localStorage.removeItem("accessToken");
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth: !!user,
        isLoading,
        login,
        register,
        logout,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
