import axios, { AxiosError, type AxiosResponse } from "axios";
import toast from "react-hot-toast";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<any>) => {
    if (!error.response) {
      toast.error("Network error. Please check your connection.");
      return Promise.reject(error);
    }

    const { status, data } = error.response;
    const message = data?.message || "Something went wrong.";

    if (status === 401) {
      // ПЕРЕВІРКА: Робимо редірект тільки якщо ми НЕ на сторінці логіна
      if (window.location.pathname !== "/login") {
        toast.error("You are not authorized. Please log in again.");
        window.location.href = "/login";
      }
      // Якщо ми вже на логіні — просто ігноруємо редірект, щоб не було циклу
    } else if (status === 403) {
      toast.error("You do not have permission to perform this action.");
    } else if (status >= 500) {
      toast.error("Server error. Please try again later.");
    } else {
      toast.error(message);
    }

    return Promise.reject(error);
  }
);

export default instance;
