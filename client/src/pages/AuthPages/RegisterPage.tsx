import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";

const translations = {
  ua: {
    title: "Новий старт",
    subtitle: "Створи акаунт, щоб почати контролювати свої звички.",
    fields: {
      username: "Username",
      email: "Email",
      password: "Password",
      confirm: "Підтвердження",
      btn: "Зареєструватися",
    },
    errors: {
      match: "Паролі не співпадають",
      length: "Пароль надто короткий (мін. 6 символів)",
    },
    footer: {
      text: "Вже є акаунт?",
      link: "Увійти",
    },
  },
  en: {
    title: "Join TrackIt",
    subtitle: "Create an account to start building better discipline.",
    fields: {
      username: "Username",
      email: "Email",
      password: "Password",
      confirm: "Confirm Password",
      btn: "Create Account",
    },
    errors: {
      match: "Passwords do not match",
      length: "Password is too short (min 6 chars)",
    },
    footer: {
      text: "Already have an account?",
      link: "Sign in",
    },
  },
};

export const RegisterPage = () => {
  const [lang, setLang] = useState<"en" | "ua">("en");
  const t = translations[lang];

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError(t.errors.match);
      return;
    }

    if (password.length < 6) {
      setError(t.errors.length);
      return;
    }

    setLoading(true);

    try {
      await register({ username, email, password });
      navigate("/");
    } catch (err: any) {
      const serverMessage = err.response?.data?.message;
      if (serverMessage) {
        setError(
          Array.isArray(serverMessage) ? serverMessage.join("") : serverMessage
        );
      } else {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
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
              <label className={styles.label}>{t.fields.username}</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                required
                disabled={loading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t.fields.email}</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
                disabled={loading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t.fields.password}</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
                disabled={loading}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t.fields.confirm}</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              <Link to="/login" className={styles.footerLink}>
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
