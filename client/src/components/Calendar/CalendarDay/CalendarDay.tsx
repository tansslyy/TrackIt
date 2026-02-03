import {
  format,
  isSameMonth,
  isSameDay,
  isBefore,
  startOfDay,
  parseISO,
} from "date-fns";
import type { UserHabit } from "../../../api/types/models/user-habit.model";
import { DayOfWeek, HabitStatus } from "../../../api/types/enums";
import styles from "./CalendarDay.module.css";

interface Props {
  day: Date;
  currentMonth: Date;
  habits: UserHabit[];
  onSelect: (date: Date) => void;
}

const getBackendDayOfWeek = (date: Date): DayOfWeek => {
  const dayIndex = date.getDay();
  const map: Record<number, DayOfWeek> = {
    0: DayOfWeek.SUNDAY,
    1: DayOfWeek.MONDAY,
    2: DayOfWeek.TUESDAY,
    3: DayOfWeek.WEDNESDAY,
    4: DayOfWeek.THURSDAY,
    5: DayOfWeek.FRIDAY,
    6: DayOfWeek.SATURDAY,
  };

  return map[dayIndex];
};

export const CalendarDay = ({ day, currentMonth, habits, onSelect }: Props) => {
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const isToday = isSameDay(day, new Date());
  const currentDayOfWeek = getBackendDayOfWeek(day);
  const normalizedDay = startOfDay(day);
  const dateKey = format(day, "yyyy-MM-dd");

  const activeHabits = habits.filter((habit) => {
    const habitStart = startOfDay(
      typeof habit.startDate === "string"
        ? parseISO(habit.startDate)
        : habit.startDate,
    );
    if (isBefore(normalizedDay, habitStart)) return false;

    if (habit.deletedAt) {
      const deletedAt = startOfDay(
        typeof habit.deletedAt === "string"
          ? parseISO(habit.deletedAt)
          : habit.deletedAt,
      );
      if (isBefore(deletedAt, normalizedDay)) return false;
    }

    if (habit.repeatType === "DAILY") return true;
    if (habit.repeatType === "CUSTOM") {
      return habit.activeDays?.includes(currentDayOfWeek);
    }
    return false;
  });

  const getHabitStatus = (habit: UserHabit) => {
    const status = habit.logs[dateKey];
    if (status === HabitStatus.COMPLETED) return "completed";
    if (isBefore(normalizedDay, startOfDay(new Date())) && !status) {
      return "skipped";
    }
    return "pending";
  };

  return (
    <div
      onClick={() => onSelect(day)}
      className={`
        ${styles.dayCell} 
        ${!isCurrentMonth ? styles.otherMonth : ""} 
        ${isToday ? styles.today : ""}
      `}
    >
      <div className={styles.dayContent}>
        <span className={styles.dayNumber}>{format(day, "d")}</span>

        <div className={styles.dotsContainer}>
          {activeHabits.slice(0, 5).map((habit) => {
            const status = getHabitStatus(habit);
            return (
              <div
                key={habit.id}
                className={`${styles.dot} ${styles[status]}`}
                title={habit.title}
              />
            );
          })}
          {activeHabits.length > 5 && <div className={styles.moreDots}>+</div>}
        </div>
      </div>
    </div>
  );
};
