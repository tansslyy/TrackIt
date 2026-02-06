import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import styles from "./Navbar.module.css";
import { HomeIcon } from "../../../assets/icons/HomeIcon";
import { CalendarIcon } from "../../../assets/icons/CalendarIcon";
import { HabitsIcon } from "../../../assets/icons/HabitsIcon";
import { LogoutIcon } from "../../../assets/icons/LogoutIcon";

export const Navbar = () => {
  const { isAuth, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div
        className={isAuth ? styles.glassContainer : styles.transparentContainer}
      >
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>✓</div>
          <span className={styles.logoText}>TrackIt</span>
        </Link>

        {isAuth ? (
          <nav className={styles.nav}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              <HomeIcon />
              <span>Головна</span>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              <div style={{ transform: "scale(0.9)" }}>📊</div>
              <span>Сьогодні</span>
            </NavLink>

            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              <CalendarIcon />
              <span>Календар</span>
            </NavLink>

            <NavLink
              to="/habits"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              <HabitsIcon />
              <span>Звички</span>
            </NavLink>
          </nav>
        ) : (
          <div style={{ flex: 1 }} />
        )}

        <div className={styles.actions}>
          {isAuth ? (
            <button onClick={logout} className={styles.logoutBtn} title="Вийти">
              <LogoutIcon />
            </button>
          ) : (
            <div className={styles.authLinks}>
              <Link to="/login" className={styles.loginLink}>
                Увійти
              </Link>
              <Link to="/register" className={styles.registerLink}>
                Почати
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
