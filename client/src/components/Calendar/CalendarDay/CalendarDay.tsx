import {
  format,
  isSameMonth,
  isSameDay,
  getDay,
  isBefore,
  startOfDay,
  parseISO,
} from "date-fns";
import type { UserHabit } from "../../../api/types/models/user-habit.model";
import { HabitStatus, DayOfWeek } from "../../../api/types/enums";
import styles from "./CalendarDay.module.css";
import { getDayOfWeekFromDate } from "../../../utils/date.utils";

interface Props {
  day: Date;
  currentMonth: Date;
  habits: UserHabit[];
  onSelect: (date: Date) => void;
}

export const CalendarDay = ({ day, currentMonth, habits, onSelect }: Props) => {
  const dateKey = format(day, "yyyy-MM-dd");
  const dayOfWeek = getDayOfWeekFromDate(day);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const isToday = isSameDay(day, new Date());

  const activeHabits = habits.filter((habit) => {
    const habitStart = startOfDay(
      parseISO(habit.startDate || new Date().toISOString())
    );
    const currentDay = startOfDay(day);
    if (isBefore(currentDay, habitStart)) return false;

    if (habit.repeatType === "DAILY") return true;
    if (habit.repeatType === "CUSTOM")
      return habit.activeDays.includes(dayOfWeek);
    return false;
  });

  const getHabitStatus = (habit: UserHabit) => {
    const status = habit.logs[dateKey] as any;
    if (status === HabitStatus.COMPLETED) return "completed";
    if (
      isBefore(day, startOfDay(new Date())) &&
      status !== HabitStatus.COMPLETED
    )
      return "skipped";
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
