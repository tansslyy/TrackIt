import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isAuth, isLoading } = useAuth();
  if (isLoading) {
    return <div>Downloading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
