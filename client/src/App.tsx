import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
import HomePage from "./pages/HomePage/HomePage"; // 👈 Імпортуємо назад
import PrivateRoute from "./routes/PrivateRoute";
import { ForgotPasswordPage } from "./pages/AuthPages/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/AuthPages/ResetPasswordPage";
import { HabitsPage } from "./pages/HabitsPage/HabitsPage";
import { CalendarPage } from "./pages/CalendarPage/CalendarPage";

function App() {
  return (
    <Routes>
      {/* Публічні маршрути */}
      <Route path="/" element={<HomePage />} /> {/* 👈 Тепер це головна */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      {/* Приватні маршрути (всередині програми) */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/habits" element={<HabitsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
