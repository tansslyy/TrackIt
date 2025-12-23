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
    const status = error.response?.status;
    const message = error.response?.data?.message || "Something went wrong";

    if (!status) {
      toast.error("Помилка мережі");
      return Promise.reject(error);
    }

    if (status === 401) {
      toast.error("Ви не авторизовані");
    } else if (status === 403) {
      toast.error("Недостатньо прав");
    } else if (status >= 500) {
      toast.error("Помилка сервера");
    } else {
      toast.error(message);
    }

    return Promise.reject(error);
  }
);

export default instance;
