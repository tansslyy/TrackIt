import { format } from "date-fns";
import { uk } from "date-fns/locale";
import styles from "./SidePanel.module.css";
import type { UserHabit } from "../../../api/types/models/user-habit.model";

interface Props {
  date: Date;
  onClose: () => void;
  habits: UserHabit[];
  loading: boolean;
  isOpen: boolean;
}

export const SidePanel = ({
  date,
  onClose,
  habits,
  loading,
  isOpen,
}: Props) => {
  return (
    <div className={`${styles.panelContainer} ${isOpen ? styles.open : ""}`}>
      <div className={styles.panelContent}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Плани на день</h3>
            <p className={styles.subtitle}>
              {format(date, "d MMMM yyyy", { locale: uk })}
            </p>
          </div>
          <button onClick={onClose} className={styles.closeBtn} title="Закрити">
            ✕
          </button>
        </div>

        <div className={styles.list}>
          {loading ? (
            <div className={styles.stateMessage}>
              <div className={styles.spinner}></div>
              <span>Завантаження...</span>
            </div>
          ) : habits.length === 0 ? (
            <div className={styles.stateMessage}>
              <span style={{ fontSize: "2rem" }}>💤</span>
              <span>Планів немає</span>
            </div>
          ) : (
            habits.map((habit) => (
              <div key={habit.id} className={styles.card}>
                <div
                  className={`
                    ${styles.statusStrip} 
                    ${
                      habit.isCompletedToday
                        ? styles.completedStrip
                        : styles.pendingStrip
                    }
                  `}
                />

                <div className={styles.cardBody}>
                  <div className={styles.cardHeader}>
                    <h4
                      className={`
                      ${styles.habitTitle} 
                      ${habit.isCompletedToday ? styles.completedText : ""}
                    `}
                    >
                      {habit.title}
                    </h4>

                    <div
                      className={`
                      ${styles.checkbox} 
                      ${habit.isCompletedToday ? styles.checked : ""}
                    `}
                    >
                      {habit.isCompletedToday && "✓"}
                    </div>
                  </div>

                  {habit.description && (
                    <p className={styles.description}>{habit.description}</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
