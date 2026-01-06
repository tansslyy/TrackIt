import { useEffect, useState, useMemo } from "react";
import type { UserHabit } from "../../../types/models/habits/user-habit";
import { HabitService } from "../../../services/habit.service";
import styles from "./Dashboard.module.css";
import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import { DashboardStats } from "../DashboardStats/DashboardStats";
import { HabitList } from "../HabitList/HabitList";
import { CreateHabitModal } from "../CreateHabitModal/CreateHabitModal";

export const Dashboard = () => {
  const [habits, setHabits] = useState<UserHabit[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadTodayHabits();
  }, []);

  const loadTodayHabits = async () => {
    try {
      setLoading(true);
      const data = await HabitService.getTodayHabits();
      setHabits(data);
    } catch (error) {
      console.error("Failed to load habits:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (habitId: string) => {
    try {
      await HabitService.toggleComplete(habitId);
      await loadTodayHabits();
    } catch (error) {
      console.error("Failed to toggle habit:", error);
    }
  };

  const handleCreateHabit = async () => {
    await loadTodayHabits();
    setIsModalOpen(false);
  };

  const { completedCount, totalCount } = useMemo(() => {
    return {
      completedCount: habits.filter((h) => h.logs.length > 0).length,
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
          onToggleComplete={handleToggleComplete}
        />
      </div>

      {isModalOpen && (
        <CreateHabitModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleCreateHabit}
        />
      )}
    </div>
  );
};
