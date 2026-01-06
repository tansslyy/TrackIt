import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
import { useAuth } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Публічні роути */}
      <Route path="/" element={<HomePage />} />

      <Route
        path="/login"
        element={!isAuth ? <LoginPage /> : <Navigate to="/habits" />}
      />

      <Route
        path="/register"
        element={!isAuth ? <RegisterPage /> : <Navigate to="/habits" />}
      />

      {/* Приватний роут для дашборду */}
      <Route
        path="/habits"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
