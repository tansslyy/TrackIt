import { useEffect, useState, useMemo } from "react";
import { HabitService } from "../../services/habit.service";
import type { UserHabit } from "../../types/models/habits/user-habit";
import { HabitList } from "../../components/habits/HabitList/HabitList";
import styles from "./DashboardPage.module.css";
import { DashboardHeader } from "../../components/habits/DashboardHeader/DashboardHeader";
import { DashboardStats } from "../../components/habits/DashboardStats/DashboardStats";
import { CreateHabitModal } from "../../components/habits/CreateHabitModal/CreateHabitModal";

export const DashboardPage = () => {
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
    <div className={styles.dashboardPage}>
      <div className={styles.backgroundLayer} />

      <div className={styles.container}>
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
