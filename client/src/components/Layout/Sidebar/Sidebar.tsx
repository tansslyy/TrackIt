import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { HomeIcon } from "../../../assets/icons/HomeIcon";
import { CalendarIcon } from "../../../assets/icons/CalendarIcon";
import { HabitsIcon } from "../../../assets/icons/HabitsIcon";
import { LogoutIcon } from "../../../assets/icons/LogoutIcon";

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
            <HomeIcon />
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
            <CalendarIcon />
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
            <HabitsIcon />
          </div>
          {!isCollapsed && <span className={styles.linkText}>Всі звички</span>}
        </NavLink>
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutBtn} title="Вийти">
          <div className={styles.iconWrapper}>
            <LogoutIcon />
          </div>
          {!isCollapsed && <span className={styles.linkText}>Вийти</span>}
        </button>
      </div>
    </aside>
  );
};
