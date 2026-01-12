import styles from "./DashboardStats.module.css";

interface DashboardStatsProps {
  completed: number;
  total: number;
}

export const DashboardStats = ({ completed, total }: DashboardStatsProps) => {
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
