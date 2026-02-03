import { format } from "date-fns";
import { uk } from "date-fns/locale";
import styles from "./CalendarHeader.module.css";

interface Props {
  currentMonth: Date;
  onPrev: () => void;
  onNext: () => void;
}

export const CalendarHeader = ({ currentMonth, onPrev, onNext }: Props) => {
  return (
    <div className={styles.headerContainer}>
      <button
        onClick={onPrev}
        className={styles.navBtn}
        aria-label="Попередній місяць"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className={styles.titleGroup}>
        <h2 className={styles.monthTitle}>
          {format(currentMonth, "LLLL", { locale: uk })}
        </h2>
        <span className={styles.yearSubtitle}>
          {format(currentMonth, "yyyy")}
        </span>
      </div>

      <button
        onClick={onNext}
        className={styles.navBtn}
        aria-label="Наступний місяць"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};
