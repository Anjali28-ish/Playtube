import axios from "axios";

// Backend base URL
export const serverUrl = "https://playtube-backend-s0xx.onrender.com";

// Create axios instance
const api = axios.create({
  baseURL: serverUrl,
  headers: { "Content-Type": "application/json" },
});

// Automatically attach token from localStorage to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // token saved after signin/signup
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
