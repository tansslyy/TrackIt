import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";

// 1. Словник перекладів
const translations = {
  ua: {
    title: "З поверненням",
    subtitle: "Продовжимо роботу над твоїми цілями.",
    fields: {
      username: "Username",
      password: "Password",
      btn: "Увійти",
      placeholderUser: "Твій нікнейм",
      placeholderPass: "Твій пароль",
    },
    footer: {
      text: "Ще не з нами?",
      link: "Створити акаунт",
    },
    error: "Невірний логін або пароль",
  },
  en: {
    title: "Welcome back",
    subtitle: "Let's verify it's you and get back to tracking.",
    fields: {
      username: "Username",
      password: "Password",
      btn: "Sign in",
      placeholderUser: "Your username",
      placeholderPass: "Your password",
    },
    footer: {
      text: "New to TrackIt?",
      link: "Create account",
    },
    error: "Invalid username or password",
  },
};

export const LoginPage = () => {
  // Стейт для мови
  const [lang, setLang] = useState<"en" | "ua">("en");
  const t = translations[lang];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ username, password });
      navigate("/");
    } catch (err) {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* 2. Перемикач мови (Top Right) */}
      <div className={styles.langWrapper}>
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

      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIconWrapper}>
            <span style={{ fontSize: "1.2rem", color: "#4f46e5" }}>✓</span>
          </div>
          <span className={styles.logoText}>TrackIt</span>
        </Link>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.subtitle}>{t.subtitle}</p>
          </div>

          {error && (
            <div className={styles.error}>
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.label}>
                {t.fields.username}
              </label>
              <input
                id="username"
                type="text"
                placeholder={t.fields.placeholderUser}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                required
                disabled={loading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                {t.fields.password}
              </label>
              <input
                id="password"
                type="password"
                placeholder={t.fields.placeholderPass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner}></span>
              ) : (
                t.fields.btn
              )}
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              {t.footer.text}{" "}
              <Link to="/register" className={styles.footerLink}>
                {t.footer.link}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bgGrid}></div>
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>
    </div>
  );
};
