import type React from "react";
import type { UserHabit } from "../../../api/types/models/habits/user-habit";
import styles from "./HabitCard.module.css";

interface HabitCardProps {
  habit: UserHabit;
  onToggle: () => void;
  onDelete: () => void;
}

export const HabitCard = ({ habit, onToggle, onDelete }: HabitCardProps) => {
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

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div
      className={`${styles.card} ${isCompleted ? styles.completed : ""}`}
      onClick={onToggle}
    >
      <button
        className={styles.deleteBtn}
        onClick={handleDeleteClick}
        title="Видалити звичку"
        aria-label="Видалити"
      >
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
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
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
