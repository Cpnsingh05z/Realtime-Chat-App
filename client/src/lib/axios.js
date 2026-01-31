import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://realtime-chat-apps-server.onrender.com/api" : "/api",
  withCredentials: true,
});
