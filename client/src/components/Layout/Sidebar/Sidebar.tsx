import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = ({ isCollapsed, toggleSidebar }: SidebarProps) => {
  return (
    <aside
      className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <button
        className={styles.toggleBtn}
        onClick={toggleSidebar}
        title={isCollapsed ? "Розгорнути" : "Згорнути"}
      >
        {isCollapsed ? "→" : "←"}
      </button>

      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>✓</div>
        {!isCollapsed && <span className={styles.logoText}>TrackIt</span>}
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <div className={styles.iconWrapper}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          {!isCollapsed && <span className={styles.linkText}>Сьогодні</span>}
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <div className={styles.iconWrapper}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
          </div>
          {!isCollapsed && <span className={styles.linkText}>Календар</span>}
        </NavLink>

        <NavLink
          to="/habits"
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <div className={styles.iconWrapper}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          {!isCollapsed && <span className={styles.linkText}>Всі звички</span>}
        </NavLink>
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutBtn} title="Вийти">
          <div className={styles.iconWrapper}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
          </div>
          {!isCollapsed && <span className={styles.linkText}>Вийти</span>}
        </button>
      </div>
    </aside>
  );
};
