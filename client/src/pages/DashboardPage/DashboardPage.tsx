import { useState, useEffect } from "react";
import { HabitService } from "../../services/habit.service";
import styles from "./DashboardPage.module.css";
import toast from "react-hot-toast";
import { Dashboard } from "../../components/habits/Dashboard/Dashboard";
import { ConfirmModal } from "../../components/habits/ConfirmModal/ConfirmModal";
import { MainLayout } from "../../components/Layout/MainLayout"; // Імпортуємо Layout
import type { UserHabit } from "../../api/types/models/user-habit.model";

export const DashboardPage = () => {
  const [habits, setHabits] = useState<UserHabit[]>([]);
  const [loading, setLoading] = useState(true);
  const [habitToDelete, setHabitToDelete] = useState<string | null>(null);

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

  useEffect(() => {
    loadTodayHabits();
  }, []);

  const handleToggleComplete = async (habitId: string) => {
    try {
      await HabitService.toggleComplete(habitId);
      await loadTodayHabits();
    } catch (error) {
      console.error("Failed to toggle habit:", error);
    }
  };

  const requestDelete = (habitId: string) => {
    setHabitToDelete(habitId);
  };

  const confirmDelete = async () => {
    if (!habitToDelete) return;
    try {
      await HabitService.delete(habitToDelete);
      toast.success("Звичку видалено");
      setHabits((prev) => prev.filter((h) => h.id !== habitToDelete));
    } catch (error) {
      console.error("Failed to delete habit", error);
      toast.error("Помилка видалення");
    } finally {
      setHabitToDelete(null);
    }
  };

  // 👇 Обгортаємо контент в MainLayout
  return (
    <MainLayout>
      <div className={styles.pageContent}>
        <Dashboard
          habits={habits}
          loading={loading}
          onToggleComplete={handleToggleComplete}
          onDelete={requestDelete}
          onRefresh={loadTodayHabits}
        />

        <ConfirmModal
          isOpen={!!habitToDelete}
          onClose={() => setHabitToDelete(null)}
          onConfirm={confirmDelete}
          title="Видалити звичку"
          message="Ви впевнені? Весь прогрес буде втрачено."
        />
      </div>
    </MainLayout>
  );
};
