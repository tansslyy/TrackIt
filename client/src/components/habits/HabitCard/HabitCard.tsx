import type { UserHabit } from "../../../types/models/habits/user-habit";
import styles from "./HabitCard.module.css";

interface HabitCardProps {
  habit: UserHabit;
  onToggle: () => void;
}

export const HabitCard = ({ habit, onToggle }: HabitCardProps) => {
  const isCompleted = habit.logs.length > 0;

  const getFrequencyLabel = (type: string) => {
    switch (type) {
      case "DAILY":
        return "Щодня";
      case "WEEKLY":
        return "Щотижня";
      case "MONTHLY":
        return "Щомісяця";
      default:
        return "За розкладом";
    }
  };

  return (
    <div
      className={`${styles.card} ${isCompleted ? styles.completed : ""}`}
      onClick={onToggle}
    >
      <div className={styles.cardGlow} />

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <div
            className={`${styles.checkbox} ${
              isCompleted ? styles.checkboxChecked : ""
            }`}
          >
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div className={styles.textInfo}>
            <h3 className={styles.title}>{habit.habit.name}</h3>
            {habit.habit.description && (
              <p className={styles.description}>{habit.habit.description}</p>
            )}
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.badge}>
            <span className={styles.badgeIcon}>↻</span>
            {getFrequencyLabel(habit.repeatType)}
          </span>
        </div>
      </div>
    </div>
  );
};
