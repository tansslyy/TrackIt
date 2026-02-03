import styles from "./DashboardHeader.module.css";
import { format, isSameDay } from "date-fns";
import { uk } from "date-fns/locale";

interface DashboardHeaderProps {
  onAddHabit: () => void;
  selectedDate: Date;
}

export const DashboardHeader = ({
  onAddHabit,
  selectedDate,
}: DashboardHeaderProps) => {
  const isToday = isSameDay(selectedDate, new Date());

  const dateString = selectedDate.toLocaleDateString("uk-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedDate =
    dateString.charAt(0).toUpperCase() + dateString.slice(1);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          {isToday
            ? "Сьогодні"
            : format(selectedDate, "d MMMM", { locale: uk })}
        </h1>
        <div className={styles.dateRow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.calendarIcon}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span className={styles.dateText}>{formattedDate}</span>
        </div>
      </div>

      <button className={styles.addButton} onClick={onAddHabit}>
        <span className={styles.addIcon}>+</span>
        Додати звичку
      </button>
    </header>
  );
};
