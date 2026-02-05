import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

interface GuestHomeProps {
  t: any;
}

export const GuestHome = ({ t }: GuestHomeProps) => {
  return (
    <>
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
              {t.heroGuest.badges.map((b: string) => (
                <div key={b} className={styles.featureBadge}>
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroVisual}></div>
        </div>
      </div>

      <div className={styles.landingSection}>
        <h2 className={styles.sectionTitle}>Як це працює?</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <span className={styles.stepIcon}>🎯</span>
            <h3>Створи ціль</h3>
            <p style={{ color: "#94a3b8" }}>
              Обери корисну звичку, яку хочеш розвинути.
            </p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <span className={styles.stepIcon}>✅</span>
            <h3>Дій щодня</h3>
            <p style={{ color: "#94a3b8" }}>Відмічай виконання в один клік.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <span className={styles.stepIcon}>🔥</span>
            <h3>Тримай стрік</h3>
            <p style={{ color: "#94a3b8" }}>
              Слідкуй за прогресом і не розривай ланцюжок.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.landingSection}>
        <h2 className={styles.sectionTitle}>{t.social?.title || "Відгуки"}</h2>
        <div className={styles.testimonialsGrid}>
          {t.social?.users?.map((u: any, i: number) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.userProfile}>
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                  alt="Avatar"
                  className={styles.userAvatar}
                />
                <div>
                  <span className={styles.userName}>{u.name}</span>
                  <span className={styles.userRole}>{u.role}</span>
                </div>
              </div>
              <p className={styles.reviewText}>"{u.text}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.landingSection}>
        <h2 className={styles.sectionTitle}>{t.faq?.title || "FAQ"}</h2>
        <div className={styles.faqContainer}>
          {t.faq?.items?.map((item: any, i: number) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqSummary}>{item.q}</summary>
              <div className={styles.faqAnswer}>{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
};
