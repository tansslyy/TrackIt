import type { HabitResponseDto } from "../../api/types/dtos/habits/habit-response.dto";
import { HabitStatus } from "../../api/types/enums";
import type { UserHabit } from "../../api/types/models/user-habit.model";

export class HabitMapper {
  static toDomain(dto: HabitResponseDto): UserHabit {
    if (!dto) {
      console.error("HabitMapper received empty DTO");
      return HabitMapper.getEmptyHabit();
    }

    const logsMap: Record<string, HabitStatus> = {};

    if (Array.isArray(dto.logs)) {
      dto.logs.forEach((log) => {
        try {
          const dateKey = new Date(log.date).toISOString().split("T")[0];
          logsMap[dateKey] = log.status;
        } catch (e) {
          console.warn("Invalid date in log:", log);
        }
      });
    }

    const isCompletedToday =
      dto.logs?.some((log) => log.status === HabitStatus.COMPLETED) || false;

    const weekDays = dto.days?.map((d) => d.dayOfWeek) || [];

    return {
      id: dto.id,
      title: dto.habit?.name || "Untitled Habit",
      description: dto.habit?.description || "",
      color: "#4f46e5",
      icon: "🔥",
      repeatType: dto.repeatType,
      days: weekDays,
      isCompletedToday: isCompletedToday,
      logs: logsMap,
    };
  }

  private static getEmptyHabit(): UserHabit {
    return {
      id: "error",
      title: "Error loading",
      description: "",
      repeatType: "DAILY" as any,
      days: [],
      isCompletedToday: false,
      logs: {},
      color: "#ef4444",
      icon: "⚠️",
    };
  }
}
