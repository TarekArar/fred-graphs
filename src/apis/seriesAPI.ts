import { api } from "./axiosConfig";

export default {
  getItem: (id: string) => api.get(`/series/observations?series_id=${id}`),
};
