import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import { CalendarDay } from "./CalendarDay/CalendarDay";
import styles from "./Calendar.module.css";
import type { UserHabit } from "../../api/types/models/user-habit.model";

interface Props {
  currentMonth: Date;
  habits: UserHabit[];
  onSelectDate: (date: Date) => void;
}

export const CalendarGrid = ({ currentMonth, habits, onSelectDate }: Props) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.weekDaysRow}>
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"].map((d) => (
          <div key={d} className={styles.weekDay}>
            {d}
          </div>
        ))}
      </div>

      <div className={styles.daysGrid}>
        {days.map((day) => (
          <CalendarDay
            key={day.toISOString()}
            day={day}
            currentMonth={currentMonth}
            habits={habits}
            onSelect={onSelectDate}
          />
        ))}
      </div>
    </div>
  );
};
