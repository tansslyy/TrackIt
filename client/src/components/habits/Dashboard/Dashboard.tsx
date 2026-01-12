import { useState, useMemo } from "react";
import styles from "./Dashboard.module.css";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import { DashboardStats } from "../DashboardStats/DashboardStats";
import { HabitList } from "../HabitList/HabitList";
import { CreateHabitModal } from "../CreateHabitModal/CreateHabitModal";
import type { UserHabit } from "../../../api/types/models/user-habit.model";
import { EditHabitModal } from "../EditHabitModal/EditHabitModal";

interface DashboardProps {
  habits: UserHabit[];
  loading: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onRefresh: () => void;
}

export const Dashboard = ({
  habits,
  loading,
  onToggleComplete,
  onDelete,
  onRefresh,
}: DashboardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState<UserHabit | null>(null);

  const handleCreateSuccess = () => {
    onRefresh();
    setIsModalOpen(false);
  };

  const handleEditSuccess = () => {
    onRefresh();
    setEditingHabit(null);
  };

  const { completedCount, totalCount } = useMemo(() => {
    return {
      completedCount: habits.filter((h) => h.isCompletedToday).length,
      totalCount: habits.length,
    };
  }, [habits]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.ambientBackground} />

      <div className={styles.contentContainer}>
        <DashboardHeader onAddHabit={() => setIsModalOpen(true)} />

        <DashboardStats completed={completedCount} total={totalCount} />

        <HabitList
          habits={habits}
          loading={loading}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={(habit) => setEditingHabit(habit)}
        />
      </div>

      {isModalOpen && (
        <CreateHabitModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleCreateSuccess}
        />
      )}

      {editingHabit && (
        <EditHabitModal
          habit={editingHabit}
          onClose={() => setEditingHabit(null)}
          onSuccess={handleEditSuccess}
        />
      )}
    </div>
  );
};
