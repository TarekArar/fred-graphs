import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,

  params: {
    api_key: import.meta.env.VITE_API_KEY,
    file_type: "json",
  },
  headers: {
    "Access-Control-Allow-Origin": true,
  },
});
