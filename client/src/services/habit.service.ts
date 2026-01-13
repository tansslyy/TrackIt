import instance from "../api/axios";
import type { CreateHabitDto } from "../api/types/dtos/habits/create-habit.dto";
import type { HabitResponseDto } from "../api/types/dtos/habits/habit-response.dto";
import type { LibraryCategoryDto } from "../api/types/dtos/habits/library-category.dto";
import type { UserHabit } from "../api/types/models/user-habit.model";
import { HabitMapper } from "../utils/mappers/habit.mapper";

export const HabitService = {
  async getTodayHabits(): Promise<UserHabit[]> {
    const { data } = await instance.get<HabitResponseDto[]>(`/habits/today`);
    return data.map((dto) => HabitMapper.toDomain(dto));
  },

  async getAll(): Promise<UserHabit[]> {
    const { data } = await instance.get<HabitResponseDto[]>(`/habits`);
    return data.map((dto) => HabitMapper.toDomain(dto));
  },

  async toggleComplete(id: string): Promise<UserHabit> {
    const { data } = await instance.patch<HabitResponseDto>(
      `/habits/${id}/toggle`
    );
    return HabitMapper.toDomain(data);
  },

  async create(dto: CreateHabitDto): Promise<UserHabit> {
    const { data } = await instance.post<HabitResponseDto>(`/habits`, dto);
    return HabitMapper.toDomain(data);
  },

  async update(id: string, dto: Partial<CreateHabitDto>): Promise<UserHabit> {
    const { data } = await instance.patch<HabitResponseDto>(
      `/habits/${id}`,
      dto
    );
    return HabitMapper.toDomain(data);
  },

  async getLibrary(): Promise<LibraryCategoryDto[]> {
    const { data } = await instance.get<LibraryCategoryDto[]>(
      "/habits/library"
    );
    return data;
  },

  async delete(id: string): Promise<void> {
    await instance.delete(`/habits/${id}`);
  },
};
