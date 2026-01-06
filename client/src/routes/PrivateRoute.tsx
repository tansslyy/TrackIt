import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type React from "react";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuth, isLoading } = useAuth();
  if (isLoading) {
    return <div>Downloading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
