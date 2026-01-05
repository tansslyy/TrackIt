import instance from "../api/axios";
import type { CreateHabitDto } from "../types/dtos/habit/create-habit.dto";
import type { UserHabit } from "../types/models/habits/user-habit";

export const HabitService = {
  async getTodayHabits(): Promise<UserHabit[]> {
    const { data } = await instance.get<UserHabit[]>(`/habits/today`);
    return data;
  },

  async toggleComplete(id: string): Promise<UserHabit> {
    const { data } = await instance.patch<UserHabit>(`/habits/${id}/toggle`);
    return data;
  },

  async create(dto: CreateHabitDto): Promise<UserHabit> {
    const { data } = await instance.post<UserHabit>(`/habits`, dto);
    return data;
  },

  async delete(id: string, dto: Partial<CreateHabitDto>): Promise<UserHabit> {
    const { data } = await instance.patch<UserHabit>(`/habits/${id}`, dto);
    return data;
  },
};
