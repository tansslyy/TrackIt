import styles from "./HabitList.module.css";
import { HabitCard } from "../HabitCard/HabitCard";
import type { UserHabit } from "../../../api/types/models/user-habit.model";

interface HabitListProps {
  habits: UserHabit[];
  loading: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
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
    return <div className={styles.loadingContainer}></div>;
  }

  if (habits.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIconWrapper}>✨</div>
        <h3 className={styles.emptyTitle}>Поки що пусто</h3>
        <p className={styles.emptyText}>
          Додайте свою першу звичку на цей день!
        </p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.listTitle}>Мої звички</h3>

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
