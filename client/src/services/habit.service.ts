import instance from "../api/axios";
import type {
  GetCalendarQueryDto,
  GetDailyQueryDto,
} from "../api/types/dtos/habits/calendar/get-calendar.dto";
import type { CreateHabitDto } from "../api/types/dtos/habits/create-habit.dto";
import type { HabitResponseDto } from "../api/types/dtos/habits/habit-response.dto";
import type { LibraryCategoryDto } from "../api/types/dtos/habits/library-category.dto";
import type { LibraryCategoryModel } from "../api/types/models/library-category.model";
import type { UserHabit } from "../api/types/models/user-habit.model";
import { HabitMapper } from "../utils/mappers/habit.mapper";

export const HabitService = {
  async getAll(): Promise<UserHabit[]> {
    const { data } = await instance.get<HabitResponseDto[]>(`/habits`);
    return data.map((dto) => HabitMapper.toDomain(dto));
  },

  async toggleComplete(id: string, date?: string): Promise<UserHabit> {
    const params = date ? { date } : {};

    const { data } = await instance.patch<HabitResponseDto>(
      `/habits/${id}/toggle`,
      {},
      { params },
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
      dto,
    );
    return HabitMapper.toDomain(data);
  },

  async getLibrary(): Promise<LibraryCategoryModel[]> {
    const { data } =
      await instance.get<LibraryCategoryDto[]>("/habits/library");

    return data.map(HabitMapper.toLibraryCategory);
  },

  async getCalendar(params: GetCalendarQueryDto): Promise<UserHabit[]> {
    const { data } = await instance.get<HabitResponseDto[]>(
      "/habits/calendar",
      {
        params,
      },
    );
    return data.map((dto) => HabitMapper.toDomain(dto));
  },

  async getDaily(params: GetDailyQueryDto): Promise<UserHabit[]> {
    const { data } = await instance.get<HabitResponseDto[]>("/habits/daily", {
      params,
    });
    return data.map((dto) => HabitMapper.toDomain(dto, params.date));
  },

  async delete(id: string): Promise<void> {
    await instance.delete(`/habits/${id}`);
  },
};
