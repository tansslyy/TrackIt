import type { UserHabit } from "../../../api/types/models/user-habit.model";
import { EmptyState } from "../../../ui/EmptyState/EmptyState";
import { LoadingSpinner } from "../../../ui/LoadingSpinner/LoadingSpinner";
import { HabitCard } from "../HabitCard/HabitCard";
import styles from "./HabitList.module.css";

interface HabitListProps {
  habits: UserHabit[];
  loading: boolean;
  onToggleComplete: (habitId: string) => void;
  onDelete: (habitId: string) => void;
  onEdit: (habit: UserHabit) => void;
}

export const HabitList = ({
  habits,
  loading,
  onToggleComplete,
  onDelete,
  onEdit,
}: HabitListProps) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  if (habits.length === 0) {
    return (
      <EmptyState
        title="Немає звичок на сьогодні"
        description="Створіть свою першу звичку, щоб почати шлях до самовдосконалення."
        icon="✨"
      />
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
            onDelete={() => onDelete(habit.id)}
            onEdit={() => onEdit(habit)}
          />
        ))}
      </div>
    </div>
  );
};
