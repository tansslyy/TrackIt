import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
import HomePage from "./pages/Home/HomePage";
import PrivateRoute from "./routes/PrivateRoute";
import { ForgotPasswordPage } from "./pages/AuthPages/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/AuthPages/ResetPasswordPage";
import { HabitsPage } from "./pages/HabitsPage/HabitsPage";
import { CalendarPage } from "./pages/CalendarPage/CalendarPage";
import { MainLayout } from "./components/Layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/habits" element={<HabitsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
