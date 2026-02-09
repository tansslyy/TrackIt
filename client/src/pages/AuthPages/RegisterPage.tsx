import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";
import { FcGoogle } from "react-icons/fc";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password is too short (min 6 chars)");
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
          Array.isArray(serverMessage) ? serverMessage.join("") : serverMessage,
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
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIconWrapper}>
            <span style={{ fontSize: "1.2rem", color: "#4f46e5" }}>✓</span>
          </div>
          <span className={styles.logoText}>TrackIt</span>
        </Link>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>Create an account</h1>
            <p className={styles.subtitle}>
              Start building better habits and discipline today.
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
              <span>Sign up with Google</span>
            </button>

            <div className={styles.divider}>
              <span>or register with email</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Username</label>
                <input
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
                  required
                  disabled={loading}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                  disabled={loading}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Password</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  required
                  disabled={loading}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Repeat your password"
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
                  "Create Account"
                )}
              </button>
            </form>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Already have an account?{" "}
              <Link to="/login" className={styles.footerLink}>
                Sign in
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
