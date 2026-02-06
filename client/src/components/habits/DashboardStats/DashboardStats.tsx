import styles from "./DashboardStats.module.css";

interface DashboardStatsProps {
  completed: number;
  total: number;
  streak: number;
}

export const DashboardStats = ({
  completed,
  total,
  streak,
}: DashboardStatsProps) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const remaining = Math.max(0, total - completed);

  return (
    <div className={styles.stats}>
      <div className={styles.progressCard}>
        <div className={styles.progressHeader}>
          <div>
            <h3 className={styles.progressTitle}>Прогрес сьогодні</h3>
            <p className={styles.progressText}>
              {completed} з {total} звичок виконано
            </p>
          </div>
          <span className={styles.progressPercentage}>{percentage}%</span>
        </div>

        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIconWrapper} ${styles.iconSuccess}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statValue}>{completed}</p>
            <p className={styles.statLabel}>Виконано</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrapper} ${styles.iconTotal}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statValue}>{total}</p>
            <p className={styles.statLabel}>Всього</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrapper} ${styles.iconStreak}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.1.243-2.143.7-3.088C5.992 12.288 8.04 13.57 8.5 14.5Z" />
            </svg>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statValue}>{streak}</p>
            <p className={styles.statLabel}>Найкращий стрік</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIconWrapper} ${styles.iconRemaining}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className={styles.statContent}>
            <p className={styles.statValue}>{remaining}</p>
            <p className={styles.statLabel}>Залишилось</p>
          </div>
        </div>
      </div>
    </div>
  );
};
