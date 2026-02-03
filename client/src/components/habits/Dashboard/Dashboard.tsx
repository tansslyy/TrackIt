import { useState, useMemo } from "react";
import styles from "./Dashboard.module.css";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import { DashboardStats } from "../DashboardStats/DashboardStats";
import { HabitList } from "../HabitList/HabitList";
import { CreateHabitModal } from "../CreateHabitModal/CreateHabitModal";
import type { UserHabit } from "../../../api/types/models/user-habit.model";
import { EditHabitModal } from "../EditHabitModal/EditHabitModal";
import { startOfToday, subDays } from "date-fns";
import { WeekNavigation } from "../WeekNavigation/WeekNavigation";

interface DashboardProps {
  habits: UserHabit[];
  loading: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onRefresh: () => void;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export const Dashboard = ({
  habits,
  loading,
  onToggleComplete,
  onDelete,
  onRefresh,
  selectedDate,
  onSelectDate,
}: DashboardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingHabit, setEditingHabit] = useState<UserHabit | null>(null);
  const mindate = subDays(startOfToday(), 14);

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
        <DashboardHeader
          onAddHabit={() => setIsModalOpen(true)}
          selectedDate={selectedDate}
        />

        <div style={{ marginBottom: "20px" }}>
          <WeekNavigation
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
            minDate={mindate}
          />
        </div>

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
