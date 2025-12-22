import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";

export const Header = () => {
  const { isAuth, user, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>✓</span>
          <span className={styles.logoText}>TrackIt</span>
        </Link>

        <nav className={styles.nav}>
          {isAuth ? (
            <div className={styles.userSection}>
              <span className={styles.username}>Привіт, {user?.username}!</span>
              <button onClick={logout} className={styles.logoutBtn}>
                Вийти
              </button>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <Link to="/login" className={styles.loginBtn}>
                Увійти
              </Link>
              <Link to="/register" className={styles.registerBtn}>
                Реєстрація
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
