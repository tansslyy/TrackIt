import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "./routes/PrivateRoute";
import { ForgotPasswordPage } from "./pages/AuthPages/ForgotPasswordPage";
import { ResetPasswordPage } from "./pages/AuthPages/ResetPasswordPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

      <Route element={<PrivateRoute />}>
        {/* <Route path="/habits" element={<HabitsPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
