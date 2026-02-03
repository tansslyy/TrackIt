import type { HabitResponseDto } from "../../api/types/dtos/habits/habit-response.dto";
import type { LibraryCategoryDto } from "../../api/types/dtos/habits/library-category.dto";
import { HabitStatus } from "../../api/types/enums";
import type { HabitMetaFragment } from "../../api/types/fragments/fragments";
import type { LibraryCategoryModel } from "../../api/types/models/library-category.model";
import type { LibraryHabit } from "../../api/types/models/library-habit.model";
import type { UserHabit } from "../../api/types/models/user-habit.model";
import { format, parseISO } from "date-fns";

export class HabitMapper {
  static toDomain(dto: HabitResponseDto, targetDateStr?: string): UserHabit {
    if (!dto) {
      console.error("HabitMapper received empty DTO");
      return HabitMapper.getEmptyHabit();
    }

    const logsMap: Record<string, HabitStatus> = {};

    if (Array.isArray(dto.logs)) {
      dto.logs.forEach((log) => {
        try {
          const dateKey = format(parseISO(log.date), "yyyy-MM-dd");
          logsMap[dateKey] = log.status;
        } catch (e) {
          console.warn("Invalid date in log:", log);
        }
      });
    }

    const checkDateKey = targetDateStr || format(new Date(), "yyyy-MM-dd");
    const isCompletedToday = logsMap[checkDateKey] === HabitStatus.COMPLETED;

    const weekDays = dto.days?.map((d) => d.dayOfWeek) || [];

    return {
      id: dto.id,
      habitId: dto.habitdId || dto.habit?.id || "unknown",
      title: dto.habit?.name || "Untitled Habit",
      description: dto.habit?.description || "",
      startDate: dto.startDate || new Date().toISOString(),
      color: "#4f46e5",
      icon: "🔥",
      repeatType: dto.repeatType,
      activeDays: weekDays,
      isCompletedToday: isCompletedToday,
      logs: logsMap,
      deletedAt: dto.deletedAt || null,
    };
  }

  static toLibraryDomain(fragment: HabitMetaFragment): LibraryHabit {
    return {
      id: fragment.id,
      name: fragment.name,
      description: fragment.description || "",
      isDefault: fragment.isDefault,
      categoryId: fragment.categoryId || "",
    };
  }

  static toLibraryCategory(dto: LibraryCategoryDto): LibraryCategoryModel {
    return {
      id: dto.id,
      name: dto.name,
      habits: dto.habit.map((h) => HabitMapper.toLibraryDomain(h)),
    };
  }

  private static getEmptyHabit(): UserHabit {
    return {
      id: "error",
      habitId: "error",
      title: "Error loading",
      description: "",
      startDate: new Date().toISOString(),
      repeatType: "DAILY" as any,
      activeDays: [],
      isCompletedToday: false,
      logs: {},
      color: "#ef4444",
      icon: "⚠️",
    };
  }
}
