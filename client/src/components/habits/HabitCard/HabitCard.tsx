import type React from "react";
import styles from "./HabitCard.module.css";
import type { UserHabit } from "../../../api/types/models/user-habit.model";
import { RepeatTime } from "../../../api/types/enums";

interface HabitCardProps {
  habit: UserHabit;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export const HabitCard = ({
  habit,
  onToggle,
  onDelete,
  onEdit,
}: HabitCardProps) => {
  const isCompleted = habit.isCompletedToday;

  const getFrequencyLabel = (type: string) => {
    switch (type) {
      case RepeatTime.DAILY:
        return "Щодня";
      case RepeatTime.WEEKLY:
        return "Щотижня";
      case RepeatTime.CUSTOM:
        return "За розкладом";
      default:
        return type;
    }
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  return (
    <div
      className={`${styles.card} ${isCompleted ? styles.completed : ""}`}
      onClick={onToggle}
      style={{ "--habit-color": habit.color } as React.CSSProperties}
    >
      <div className={styles.cardGlow} />

      <div className={styles.actions}>
        <button
          className={styles.actionBtn}
          onClick={handleEditClick}
          title="Редагувати"
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
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>

        <button
          className={`${styles.actionBtn} ${styles.deleteBtn}`}
          onClick={handleDeleteClick}
          title="Видалити"
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
      </div>

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <div
            className={`${styles.checkbox} ${
              isCompleted ? styles.checkboxChecked : ""
            }`}
            style={{
              borderColor: isCompleted ? habit.color : undefined,
              backgroundColor: isCompleted ? habit.color : undefined,
            }}
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
            <h3 className={styles.title}>
              <span style={{ marginRight: "8px" }}>{habit.icon}</span>
              {habit.title}
            </h3>
            {habit.description && (
              <p className={styles.description}>{habit.description}</p>
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
