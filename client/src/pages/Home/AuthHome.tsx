import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import type { UserHabit } from "../../api/types/models/user-habit.model";
import { HabitService } from "../../services/habit.service";
import { DashboardStats } from "../../components/habits/DashboardStats/DashboardStats";
import { DateHelper } from "../../utils/helpers/date.helper";

interface AuthHomeProps {
  t: any;
}

export const AuthHome = ({ t }: AuthHomeProps) => {
  const [stats, setStats] = useState({ streak: 0, habits: 0, completion: 0 });
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [nextHabit, setNextHabit] = useState<UserHabit | null>(null);

  const fetchData = async () => {
    if (!nextHabit) setLoading(true);

    try {
      const today = DateHelper.getToday();

      const data = await HabitService.getDaily({ date: today });

      const activeHabitsCount = data.length;
      const completedCount = data.filter((h) => h.isCompletedToday).length;
      const bestStreak =
        data.length > 0 ? Math.max(...data.map((h) => h.streak)) : 0;
      const firstUncompleted = data.find((h) => !h.isCompletedToday);

      setNextHabit(firstUncompleted || null);
      setStats({
        habits: activeHabitsCount,
        completion: completedCount,
        streak: bestStreak,
      });
    } catch (error) {
      console.error("Failed to load data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleQuickComplete = async () => {
    if (!nextHabit || actionLoading) return;

    setActionLoading(true);
    try {
      const today = DateHelper.getToday();

      await HabitService.toggleComplete(nextHabit.id, today);

      await fetchData();
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className={styles.authHero}>
      <div className={styles.welcomeSection}>
        <h1 className={styles.title}>{t.heroAuth.title}</h1>
        <p className={styles.description}>{t.heroAuth.desc}</p>

        {nextHabit && (
          <div className={styles.quickActionSection}>
            <div className={styles.quickHabitCard}>
              <span style={{ fontSize: "1.5rem" }}>{nextHabit.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div className={styles.quickHabitText}>
                  {t.quickAction?.title}
                </div>
                <div style={{ fontWeight: "bold", color: "white" }}>
                  {nextHabit.title}
                </div>
              </div>
              <button
                onClick={handleQuickComplete}
                disabled={actionLoading}
                className={styles.quickHabitBtn}
                style={{
                  opacity: actionLoading ? 0.7 : 1,
                  cursor: actionLoading ? "wait" : "pointer",
                }}
              >
                {actionLoading
                  ? "⏳..."
                  : `✓ ${t.quickAction?.doneBtn || "Зроблено"}`}
              </button>
            </div>
          </div>
        )}

        {!nextHabit && !loading && (
          <div className={styles.quickActionSection}>
            <span
              style={{
                color: "#4ade80",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              ✨ {t.quickAction?.allDone || "Все виконано!"}
            </span>
          </div>
        )}

        <div className={styles.statsWrapper} style={{ marginTop: "30px" }}>
          {loading && !stats.habits ? (
            <p
              style={{ padding: "20px", textAlign: "center", color: "#94a3b8" }}
            >
              Завантаження...
            </p>
          ) : (
            <DashboardStats
              completed={stats.completion}
              total={stats.habits}
              streak={stats.streak}
            />
          )}
        </div>

        <div className={styles.ctaButtons}>
          <Link to="/dashboard" className={styles.primaryBtn}>
            <span className={styles.btnIcon}>📅</span>
            <span>{t.heroAuth.btnDashboard}</span>
          </Link>
          <Link to="/habits" className={styles.secondaryBtn}>
            <span className={styles.btnIcon}>⚙️</span>
            <span>{t.heroAuth.btnHabits}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
