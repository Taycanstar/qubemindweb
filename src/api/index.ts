import axios from "axios";

const LOCAL = process.env.REACT_APP_LOCAL_URL;

const api = axios.create({
  baseURL: `${LOCAL}`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
