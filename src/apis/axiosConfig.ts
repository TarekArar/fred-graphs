import axios from "axios";

const API_BASE_URL = "/api";
const API_KEY = "c3ee4fd8a1e5fac0d1615273ee4b89ec";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,

  params: {
    api_key: API_KEY,
    file_type: "json",
  },
  headers: {
    "Access-Control-Allow-Origin": true,
  },
});
