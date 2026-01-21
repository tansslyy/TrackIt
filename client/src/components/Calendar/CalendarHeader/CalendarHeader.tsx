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
      <button onClick={onPrev} className={styles.navBtn} aria-label="Назад">
        ←
      </button>

      <div className={styles.titleGroup}>
        <h2 className={styles.monthTitle}>
          {format(currentMonth, "LLLL", { locale: uk })}
        </h2>
        <span className={styles.yearSubtitle}>
          {format(currentMonth, "yyyy")}
        </span>
      </div>

      <button onClick={onNext} className={styles.navBtn} aria-label="Вперед">
        →
      </button>
    </div>
  );
};
