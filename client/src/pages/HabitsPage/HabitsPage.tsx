import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HabitsPage.module.css";
import type { UserHabit } from "../../api/types/models/user-habit.model";
import { HabitService } from "../../services/habit.service";
import toast from "react-hot-toast";
import { ConfirmModal } from "../../components/habits/ConfirmModal/ConfirmModal";
import { EditHabitModal } from "../../components/habits/EditHabitModal/EditHabitModal";
import { HabitList } from "../../components/habits/HabitList/HabitList";

export const HabitsPage = () => {
  const [habits, setHabits] = useState<UserHabit[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingHabit, setEditingHabit] = useState<UserHabit | null>(null);
  const [habitToDelete, setHabitToDelete] = useState<string | null>(null);

  const [filterType, setFilterType] = useState<"all" | "good" | "bad">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const loadAllHabits = async () => {
    try {
      setLoading(true);
      const data = await HabitService.getAll();
      setHabits(data);
    } catch (error) {
      console.error("Failed to load habits:", error);
      toast.error("Не вдалося завантажити звички");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllHabits();
  }, []);

  const confirmDelete = async () => {
    if (!habitToDelete) return;
    try {
      await HabitService.delete(habitToDelete);
      toast.success("Звичку видалено");
      setHabits((prev) => prev.filter((h) => h.id !== habitToDelete));
    } catch (error) {
      toast.error("Помилка при видаленні");
    } finally {
      setHabitToDelete(null);
    }
  };

  const filteredHabits = habits.filter((habit) => {
    const matchesSearch =
      searchQuery === "" ||
      habit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (habit.description &&
        habit.description.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = true;
    /*
       filterType === "all" || habit.type === filterType 
    */

    return matchesType && matchesSearch;
  });

  const stats = {
    total: habits.length,
    active: habits.length,
    completedToday: habits.filter((h) => h.isCompletedToday).length,
  };

  return (
    <div className={styles.page}>
      <div className={styles.backgroundLayer}>
        <div className={styles.bgBlob1} />
        <div className={styles.bgBlob2} />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Управління звичками</h1>
            <p className={styles.subtitle}>
              Тут відображаються всі твої звички. Редагуй, видаляй або
              переглядай прогрес.
            </p>
          </div>

          <Link to="/dashboard" className={styles.backBtn}>
            <span>← Назад до Дашборда</span>
          </Link>
        </div>

        <div className={styles.statsBar}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>📊</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{stats.total}</div>
              <div className={styles.statLabel}>Всього звичок</div>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>🔥</div>
            <div className={styles.statContent}>
              <div className={styles.statValue}>{stats.completedToday}</div>
              <div className={styles.statLabel}>Виконано сьогодні</div>
            </div>
          </div>
        </div>

        <div className={styles.controlsBar}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Пошук звичок..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={styles.clearBtn}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {filteredHabits.length > 0 ? (
          <HabitList
            habits={filteredHabits}
            loading={loading}
            onToggleComplete={() => {}}
            onDelete={(id) => setHabitToDelete(id)}
            onEdit={(habit) => setEditingHabit(habit)}
          />
        ) : (
          !loading && (
            <div className={styles.emptyState}>
              <h3>Нічого не знайдено 🕵️‍♀️</h3>
              <p>Спробуй змінити запит</p>
            </div>
          )
        )}
      </div>

      {editingHabit && (
        <EditHabitModal
          habit={editingHabit}
          onClose={() => setEditingHabit(null)}
          onSuccess={() => {
            setEditingHabit(null);
            loadAllHabits();
          }}
        />
      )}

      <ConfirmModal
        isOpen={!!habitToDelete}
        onClose={() => setHabitToDelete(null)}
        onConfirm={confirmDelete}
        title="Видалити звичку?"
        message="Ви впевнені? Це безповоротна дія."
      />
    </div>
  );
};
