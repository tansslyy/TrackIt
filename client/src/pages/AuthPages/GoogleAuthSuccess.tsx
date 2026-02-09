import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export const GoogleAuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      navigate("/", { replace: true });
    } else {
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f0c29",
      }}
    >
      <h2 style={{ color: "white" }}>Redirecting...</h2>
    </div>
  );
};
