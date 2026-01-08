import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />

      <Route element={<PrivateRoute />}>
        {/* <Route path="/habits" element={<HabitsPage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
