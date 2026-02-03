import { useState, useEffect } from "react";
import { HabitService } from "../../services/habit.service";
import styles from "./DashboardPage.module.css";
import toast from "react-hot-toast";
import { Dashboard } from "../../components/habits/Dashboard/Dashboard";
import { ConfirmModal } from "../../components/habits/ConfirmModal/ConfirmModal";
import type { UserHabit } from "../../api/types/models/user-habit.model";
import { startOfToday, format } from "date-fns";

export const DashboardPage = () => {
  const [habits, setHabits] = useState<UserHabit[]>([]);
  const [loading, setLoading] = useState(true);
  const [habitToDelete, setHabitToDelete] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(startOfToday());

  const loadHabits = async () => {
    try {
      setLoading(true);
      const dateStr = format(selectedDate, "yyyy-MM-dd");
      const data = await HabitService.getDaily({ date: dateStr });
      setHabits(data);
    } catch (error) {
      console.error("Failed to load habits:", error);
      toast.error("Не вдалося завантажити звички");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHabits();
  }, [selectedDate]);

  const handleToggleComplete = async (habitId: string) => {
    try {
      const dateStr = format(selectedDate, "yyyy-MM-dd");
      await HabitService.toggleComplete(habitId, dateStr);
      await loadHabits();
    } catch (error) {
      console.error("Failed to toggle habit:", error);
    }
  };

  const confirmDelete = async () => {
    if (!habitToDelete) return;
    try {
      await HabitService.delete(habitToDelete);
      toast.success("Звичку видалено");
      setHabits((prev) => prev.filter((h) => h.id !== habitToDelete));
    } catch (error) {
      toast.error("Помилка видалення");
    } finally {
      setHabitToDelete(null);
    }
  };

  return (
    <div className={styles.pageContent}>
      <div className={styles.dashboardContainer}>
        <Dashboard
          habits={habits}
          loading={loading}
          onToggleComplete={handleToggleComplete}
          onDelete={(id) => setHabitToDelete(id)}
          onRefresh={loadHabits}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      </div>

      <ConfirmModal
        isOpen={!!habitToDelete}
        onClose={() => setHabitToDelete(null)}
        onConfirm={confirmDelete}
        title="Видалити звичку"
        message="Ви впевнені? Весь прогрес буде втрачено."
      />
    </div>
  );
};
