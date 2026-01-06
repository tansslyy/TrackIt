import type { UserHabit } from "../../../types/models/habits/user-habit";
import { HabitCard } from "../HabitCard/HabitCard";
import { LoadingSpinner } from "../../../ui/LoadingSpinner/LoadingSpinner";
import styles from "./HabitList.module.css";

interface HabitListProps {
  habits: UserHabit[];
  loading: boolean;
  onToggleComplete: (habitId: string) => void;
}

export const HabitList = ({
  habits,
  loading,
  onToggleComplete,
}: HabitListProps) => {
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  if (habits.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIconWrapper}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </div>
        <h3 className={styles.emptyTitle}>Немає звичок на сьогодні</h3>
        <p className={styles.emptyText}>
          Додайте свою першу звичку, щоб почати <br /> відстежувати прогрес вже
          зараз
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.listTitle}>Мої звички</h2>

      <div className={styles.habitGrid}>
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggle={() => onToggleComplete(habit.id)}
          />
        ))}
      </div>
    </div>
  );
};
