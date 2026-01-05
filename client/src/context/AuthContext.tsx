import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/auth.service";
import type { RegisterDto } from "../types/dtos/auth/register.dto";
import type { LoginDto } from "../types/dtos/auth/login.dto";
import type { User } from "../types/models/user.model";

interface AuthContextType {
  user: User | null;
  isAuth: boolean;
  isLoading: boolean;
  login: (data: LoginDto) => Promise<void>;
  register: (data: RegisterDto) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const UserData = await authService.getMe();
        setUser(UserData);
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (data: LoginDto) => {
    await authService.login(data);
    const userData = await authService.getMe();
    setUser(userData);
  };

  const register = async (data: RegisterDto) => {
    await authService.register(data);
    const userData = await authService.getMe();
    setUser(userData);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuth: !!user, isLoading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
