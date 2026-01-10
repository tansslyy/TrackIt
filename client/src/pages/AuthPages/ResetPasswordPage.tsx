import { useState } from "react";
import styles from "./AuthPage.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authService } from "../../services/auth.service";
import toast from "react-hot-toast";

const translations = {
  ua: {
    title: "Новий пароль",
    subtitle: "Введи новий пароль для свого акаунту.",
    fields: {
      password: "Новий пароль",
      confirm: "Підтвердження паролю",
      placeholderPass: "Твій новий пароль",
      placeholderConfirm: "Повтори пароль",
      btn: "Скинути пароль",
    },
    errors: {
      match: "Паролі не співпадають",
      length: "Пароль надто короткий (мін. 6 символів)",
      token: "Невалідне або застаріле посилання",
    },
    success: "Пароль успішно змінено! Перенаправлення...",
    footer: {
      text: "Згадав пароль?",
      link: "Увійти",
    },
  },
  en: {
    title: "Reset Password",
    subtitle: "Enter a new password for your account.",
    fields: {
      password: "New Password",
      confirm: "Confirm Password",
      placeholderPass: "Your new password",
      placeholderConfirm: "Repeat password",
      btn: "Reset Password",
    },
    errors: {
      match: "Passwords do not match",
      length: "Password is too short (min 6 chars)",
      token: "Invalid or expired reset link",
    },
    success: "Password reset successful! Redirecting...",
    footer: {
      text: "Remember your password?",
      link: "Sign in",
    },
  },
};

export const ResetPasswordPage = () => {
  const [lang, setLang] = useState<"en" | "ua">("en");
  const t = translations[lang];

  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError(t.errors.match);
      return;
    }

    if (password.length < 8) {
      setError(t.errors.length);
      return;
    }

    if (!token) {
      setError(t.errors.token);
      return;
    }

    setLoading(true);

    try {
      await authService.resetPassword(token, { password });
      toast.success(t.success);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err: any) {
      const serverMessage = err.response?.data?.message;
      setError(serverMessage || t.errors.token);
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

            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                {t.fields.confirm}
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder={t.fields.placeholderConfirm}
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
