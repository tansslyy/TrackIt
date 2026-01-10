import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

// Об'єкт із перекладами (тексти зроблені більш "живими")
const translations = {
  ua: {
    nav: {
      login: "Увійти",
      register: "Почати",
      cabinet: "Кабінет",
      logout: "Вийти",
    },
    heroGuest: {
      title: "Твій успіх \nу маленьких кроках",
      desc: "Забудь про мотивацію — покладайся на дисципліну. TrackIt допомагає будувати корисні звички та ламати шкідливі. Просто і без зайвого шуму.",
      btn: "Створити акаунт безкоштовно",
      badges: ["📈 Статистика", "🔔 Нагадування", "🔥 Стріки"],
    },
    heroAuth: {
      title: "Раді бачити тебе знову!",
      desc: "Сьогодні ідеальний день, щоб продовжити свою серію. Твої цілі самі себе не закриють 😉",
      btn: "До моїх звичок →",
    },
    mockups: {
      run: "Ранкова пробіжка",
      water: "Пити воду",
      read: "Читання",
      progress: "Прогрес",
      days: "днів",
      today: "Сьогодні",
      status: "Статус",
      done: "Виконано!",
    },
  },
  en: {
    nav: {
      login: "Log in",
      register: "Get Started",
      cabinet: "Dashboard",
      logout: "Log out",
    },
    heroGuest: {
      title: "Build habits \nthat actually stick", // Більш "людський" заголовок
      desc: "Stop relying on willpower alone. TrackIt helps you build discipline, break bad loops, and visualize your progress — one day at a time.",
      btn: "Start Tracking — It's Free",
      badges: ["📈 Insights", "🔔 Reminders", "🔥 Streaks"],
    },
    heroAuth: {
      title: "Welcome back!",
      desc: "Your streak is waiting. Let's check off some wins and keep the momentum going.",
      btn: "Go to Dashboard →",
    },
    mockups: {
      run: "Morning Run",
      water: "Hydration",
      read: "Reading",
      progress: "Streak",
      days: "days",
      today: "Today",
      status: "Status",
      done: "Done!",
    },
  },
};

const HomePage = () => {
  const { isAuth, user, logout } = useAuth();

  const [lang, setLang] = useState<"en" | "ua">("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ua" : "en"));

  const t = translations[lang];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>✓</span>
            <span>TrackIt</span>
          </div>

          <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div className={styles.langSimple}>
              <div className={styles.langSwitch}>
                <button
                  className={`${styles.langBtn} ${
                    lang === "ua" ? styles.langBtnActive : ""
                  }`}
                  onClick={() => setLang("ua")}
                >
                  UA
                </button>
                <button
                  className={`${styles.langBtn} ${
                    lang === "en" ? styles.langBtnActive : ""
                  }`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
              </div>
            </div>

            {isAuth ? (
              <div className={styles.authButtons}>
                <span style={{ marginRight: "10px", opacity: 0.8 }}>
                  {user?.username}
                </span>
                <button
                  onClick={logout}
                  className={styles.loginBtn}
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    fontSize: "1rem",
                  }}
                >
                  {t.nav.logout}
                </button>
                <Link to="/dashboard" className={styles.registerBtn}>
                  {t.nav.cabinet}
                </Link>
              </div>
            ) : (
              <div className={styles.authButtons}>
                <Link to="/login" className={styles.loginBtn}>
                  {t.nav.login}
                </Link>
                <Link to="/register" className={styles.registerBtn}>
                  {t.nav.register}
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {isAuth ? (
          <div
            className={styles.heroContent}
            style={{ textAlign: "center", width: "100%" }}
          >
            <h1 className={styles.title}>{t.heroAuth.title}</h1>
            <p className={styles.description} style={{ margin: "0 auto 2rem" }}>
              {t.heroAuth.desc}
            </p>
            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              <Link
                to="/habits"
                className={styles.registerBtn}
                style={{ padding: "1rem 3rem" }}
              >
                {t.heroAuth.btn}
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.title} style={{ whiteSpace: "pre-line" }}>
                {t.heroGuest.title}
              </h1>
              <p className={styles.description}>{t.heroGuest.desc}</p>

              <div
                className={styles.authButtons}
                style={{ justifyContent: "flex-start" }}
              >
                <Link to="/register" className={styles.registerBtn}>
                  {t.heroGuest.btn}
                </Link>
              </div>

              <div className={styles.featuresRow}>
                {t.heroGuest.badges.map((badge, index) => (
                  <div key={index} className={styles.featureBadge}>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.previewContainer}>
                <div className={styles.habitMockup}>
                  <h4>🏃‍♂️ {t.mockups.run}</h4>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      fontSize: "0.8rem",
                      color: "#555",
                    }}
                  >
                    <span>{t.mockups.progress}</span>
                    <span>12/15 {t.mockups.days}</span>
                  </div>
                </div>

                <div className={styles.habitMockup}>
                  <h4>💧 {t.mockups.water}</h4>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      fontSize: "0.8rem",
                      color: "#555",
                    }}
                  >
                    <span>{t.mockups.today}</span>
                    <span>4/8</span>
                  </div>
                </div>

                <div className={styles.habitMockup}>
                  <h4>📚 {t.mockups.read}</h4>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: "100%", background: "#4ade80" }}
                    ></div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                      fontSize: "0.8rem",
                      color: "#555",
                    }}
                  >
                    <span>{t.mockups.status}</span>
                    <span>{t.mockups.done} 🎉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <div className={styles.bgDecoration1}></div>
      <div className={styles.bgDecoration2}></div>
    </div>
  );
};

export default HomePage;
