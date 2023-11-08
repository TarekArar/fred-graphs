import { api } from "./axiosConfig";

export default {
  getSeriesObservation: (id: string) =>
    api.get(`/series/observations?series_id=${id}`),
};
