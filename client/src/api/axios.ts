import axios, { type AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("User is not authorized");
    }
    return Promise.reject(error);
  }
);

export default instance;
