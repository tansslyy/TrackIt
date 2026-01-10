import { useState } from "react";
import { authService } from "../../services/auth.service";
import toast from "react-hot-toast";
import styles from "./AuthPage.module.css";
import { Link } from "react-router-dom";

const translations = {
  ua: {
    title: "Відновлення паролю",
    subtitle: "Введи свій email, щоб отримати посилання для скидання паролю.",
    fields: {
      email: "Email",
      placeholderEmail: "Твій email",
      btn: "Надіслати посилання",
    },
    footer: {
      text: "Згадав пароль?",
      link: "Увійти",
    },
    success: "Посилання для скидання паролю надіслано на email",
    error: "Не вдалося надіслати посилання",
  },
  en: {
    title: "Forgot Password",
    subtitle: "Enter your email to receive a password reset link.",
    fields: {
      email: "Email",
      placeholderEmail: "Your email",
      btn: "Send Reset Link",
    },
    footer: {
      text: "Remember your password?",
      link: "Sign in",
    },
    success: "Password reset link sent to your email",
    error: "Failed to send reset link",
  },
};

export const ForgotPasswordPage = () => {
  const [lang, setLang] = useState<"en" | "ua">("en");
  const t = translations[lang];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.forgotPassword({ email });
      setSuccess(true);
      toast.success(t.success);
    } catch (err: any) {
      toast.error(err.response?.data?.message || t.error);
    } finally {
      setLoading(false);
    }
  }; // <--- ТУТ закінчується функція handleSubmit

  // <--- А ТУТ починається return самого компонента (він має бути ззовні)
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

          {success ? (
            <div className={styles.success}>
              <span>✅</span> {t.success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  {t.fields.email}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={t.fields.placeholderEmail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
          )}

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
