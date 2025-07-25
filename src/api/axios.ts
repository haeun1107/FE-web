import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token && config.url !== "/admin/login") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
