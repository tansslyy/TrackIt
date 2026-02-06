import type React from "react";
import styles from "./HabitCard.module.css";
import type { UserHabit } from "../../../api/types/models/user-habit.model";
import { RepeatTime } from "../../../api/types/enums";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { HabitCheckbox } from "../../../ui/HabitCheckbox/HabitCheckbox";

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
  const streakCount = habit.streak || 0;

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
          <EditIcon />
        </button>

        <button
          className={`${styles.actionBtn} ${styles.deleteBtn}`}
          onClick={handleDeleteClick}
          title="Видалити"
        >
          <DeleteIcon />
        </button>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <HabitCheckbox isChecked={isCompleted} color={habit.color} />

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
          <span
            className={`${styles.badge} ${
              streakCount > 0 ? styles.streakActive : styles.streakEmpty
            }`}
          >
            <span className={styles.badgeIcon}>🔥</span>
            {streakCount} {streakCount === 1 ? "день" : "днів"}
          </span>

          <span className={styles.badge}>
            <span className={styles.badgeIcon}>↻</span>
            {getFrequencyLabel(habit.repeatType)}
          </span>
        </div>
      </div>
    </div>
  );
};
