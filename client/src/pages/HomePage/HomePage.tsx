import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { Navbar } from "../../components/Layout/Navbar/Navbar";

const translations = {
  ua: {
    heroGuest: {
      title: "Твій успіх\nу маленьких кроках",
      desc: "Забудь про мотивацію — покладайся на дисципліну...",
      btn: "Створити акаунт безкоштовно",
      badges: ["📈 Статистика", "🔔 Нагадування", "🔥 Стріки"],
      features: {
        title: "Чому TrackIt?",
        items: [
          {
            icon: "🎯",
            title: "Фокус на дисципліні",
            desc: "Не чекай мотивації...",
          },
          {
            icon: "📊",
            title: "Наочна статистика",
            desc: "Бачи свій прогрес...",
          },
          {
            icon: "⚡",
            title: "Простота використання",
            desc: "Ніяких зайвих функцій...",
          },
        ],
      },
    },
    heroAuth: {
      title: "Раді бачити тебе знову!",
      desc: "Сьогодні ідеальний день, щоб продовжити свою серію...",
      btnDashboard: "Мій день",
      btnHabits: "Керування звичками",
      stats: {
        streak: "Поточний стрік",
        habits: "Активних звичок",
        completion: "Завершено",
      },
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
    heroGuest: {
      title: "Build habits\nthat actually stick",
      desc: "Stop relying on willpower alone...",
      btn: "Start Tracking — It's Free",
      badges: ["📈 Insights", "🔔 Reminders", "🔥 Streaks"],
      features: {
        title: "Why TrackIt?",
        items: [
          {
            icon: "🎯",
            title: "Focus on Discipline",
            desc: "Don't wait for motivation...",
          },
          {
            icon: "📊",
            title: "Visual Analytics",
            desc: "See your progress...",
          },
          { icon: "⚡", title: "Dead Simple", desc: "No bloat..." },
        ],
      },
    },
    heroAuth: {
      title: "Welcome back!",
      desc: "Your streak is waiting...",
      btnDashboard: "My Dashboard",
      btnHabits: "Manage Habits",
      stats: {
        streak: "Current Streak",
        habits: "Active Habits",
        completion: "Completed Today",
      },
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
  const { isAuth } = useAuth();
  const [lang] = useState<"en" | "ua">("en");
  const t = translations[lang];

  const mockStats = { streak: 12, habits: 5, completion: 3 };

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.main}>
        {isAuth ? (
          <div className={styles.authHero}>
            <div className={styles.welcomeSection}>
              <h1 className={styles.title}>{t.heroAuth.title}</h1>
              <p className={styles.description}>{t.heroAuth.desc}</p>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>🔥</div>
                  <div className={styles.statValue}>{mockStats.streak}</div>
                  <div className={styles.statLabel}>
                    {t.heroAuth.stats.streak}
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>📋</div>
                  <div className={styles.statValue}>{mockStats.habits}</div>
                  <div className={styles.statLabel}>
                    {t.heroAuth.stats.habits}
                  </div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>✅</div>
                  <div className={styles.statValue}>{mockStats.completion}</div>
                  <div className={styles.statLabel}>
                    {t.heroAuth.stats.completion}
                  </div>
                </div>
              </div>

              <div className={styles.ctaButtons}>
                <Link to="/dashboard" className={styles.primaryBtn}>
                  <span>{t.heroAuth.btnDashboard}</span>
                  <span className={styles.btnIcon}>📅</span>
                </Link>
                <Link to="/habits" className={styles.secondaryBtn}>
                  <span>{t.heroAuth.btnHabits}</span>
                  <span className={styles.btnIcon}>⚙️</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.guestHero}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <h1 className={styles.title} style={{ whiteSpace: "pre-line" }}>
                  {t.heroGuest.title}
                </h1>
                <p className={styles.description}>{t.heroGuest.desc}</p>

                <Link to="/register" className={styles.primaryBtnLarge}>
                  {t.heroGuest.btn}
                </Link>

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
                    <div className={styles.mockupMeta}>
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
                    <div className={styles.mockupMeta}>
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
                    <div className={styles.mockupMeta}>
                      <span>{t.mockups.status}</span>
                      <span>{t.mockups.done} 🎉</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.featuresSection}>
              <h2 className={styles.featuresTitle}>
                {t.heroGuest.features.title}
              </h2>
              <div className={styles.featuresGrid}>
                {t.heroGuest.features.items.map((item, index) => (
                  <div key={index} className={styles.featureCard}>
                    <div className={styles.featureIcon}>{item.icon}</div>
                    <h3 className={styles.featureTitle}>{item.title}</h3>
                    <p className={styles.featureDesc}>{item.desc}</p>
                  </div>
                ))}
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
