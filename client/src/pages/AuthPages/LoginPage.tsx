import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";
import { FcGoogle } from "react-icons/fc";

export const LoginPage = () => {
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
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIconWrapper}>
            <span style={{ fontSize: "1.2rem", color: "#4f46e5" }}>✓</span>
          </div>
          <span className={styles.logoText}>TrackIt</span>
        </Link>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>
              Let's verify it's you and get back to tracking.
            </p>
          </div>

          {error && (
            <div className={styles.error}>
              <span>⚠️</span> {error}
            </div>
          )}

          <div className={styles.form}>
            <button
              type="button"
              className={styles.googleBtn}
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={22} />
              <span>Continue with Google</span>
            </button>

            <div className={styles.divider}>
              <span>or sign in with email</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="username" className={styles.label}>
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
                  required
                  disabled={loading}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  required
                  disabled={loading}
                />
              </div>

              <div className={styles.forgotWrapper}>
                <Link to="/forgot-password" className={styles.forgotLink}>
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? <span className={styles.spinner}></span> : "Sign in"}
              </button>
            </form>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              New to TrackIt?{" "}
              <Link to="/register" className={styles.footerLink}>
                Create account
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
