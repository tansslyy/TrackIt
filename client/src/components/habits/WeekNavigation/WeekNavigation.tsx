import { useMemo } from "react";
import styles from "./WeekNavigation.module.css";
import {
  addDays,
  format,
  isSameDay,
  startOfWeek,
  isAfter,
  isBefore,
  startOfToday,
} from "date-fns";
import { uk } from "date-fns/locale";
import { PreviousWeekIcon } from "../../../assets/icons/PreviousWeekIcon";
import { NextWeekIcon } from "../../../assets/icons/NextWeekIcon";

interface Props {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  minDate: Date;
}

export const WeekNavigation = ({
  selectedDate,
  onSelectDate,
  minDate,
}: Props) => {
  const today = startOfToday();

  const weekDays = useMemo(() => {
    const start = startOfWeek(selectedDate, { weekStartsOn: 1 });
    return Array.from({ length: 7 }).map((_, i) => addDays(start, i));
  }, [selectedDate]);

  const handlePrevWeek = () => {
    onSelectDate(addDays(selectedDate, -7));
  };

  const handleNextWeek = () => {
    const nextDate = addDays(selectedDate, 7);

    if (isAfter(nextDate, addDays(today, 7))) {
      onSelectDate(today);
    } else {
      onSelectDate(nextDate);
    }
  };

  const currentMonthTitle = format(weekDays[0], "LLLL yyyy", { locale: uk });
  const capitalizedMonth =
    currentMonthTitle.charAt(0).toUpperCase() + currentMonthTitle.slice(1);

  return (
    <div className={styles.container}>
      <div className={styles.headerControls}>
        <button
          onClick={handlePrevWeek}
          className={styles.navArrow}
          title="Попередній тиждень"
        >
          <PreviousWeekIcon />
        </button>

        <span className={styles.monthTitle}>{capitalizedMonth}</span>

        <button
          onClick={handleNextWeek}
          className={styles.navArrow}
          title="Наступний тиждень"
        >
          <NextWeekIcon />
        </button>
      </div>

      <div className={styles.daysRow}>
        {weekDays.map((date) => {
          const isActive = isSameDay(date, selectedDate);
          const isFuture = isAfter(date, today);
          const isTooOld = isBefore(date, minDate);
          const isDisabled = isFuture || isTooOld;

          return (
            <button
              key={date.toISOString()}
              className={`${styles.dayItem} ${isActive ? styles.active : ""} ${isDisabled ? styles.disabled : ""}`}
              onClick={() => !isDisabled && onSelectDate(date)}
              disabled={isDisabled}
            >
              <span className={styles.dayName}>
                {format(date, "EEE", { locale: uk })}
              </span>
              <span className={styles.dayNumber}>{format(date, "d")}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
