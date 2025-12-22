import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { useAuth } from "./context/AuthContext";
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
function App() {
  const { isAuth, isLoading } = useAuth();
  if (isLoading) {
    return <div>Завантаження...</div>;
  }
  return (
    <Routes>
      {" "}
      <Route
        path="/login"
        element={!isAuth ? <LoginPage /> : <Navigate to="/" />}
      />{" "}
      <Route
        path="/register"
        element={!isAuth ? <RegisterPage /> : <Navigate to="/" />}
      />{" "}
      <Route path="/" element={<HomePage />} />{" "}
    </Routes>
  );
}
export default App;
