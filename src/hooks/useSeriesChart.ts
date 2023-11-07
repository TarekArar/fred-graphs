import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import seriesAPI from "../apis/seriesAPI";
import { Observation } from "../types";

export default function useSeries(id: string) {
  const { isLoading, data } = useQuery({
    queryKey: ["Serie", id],
    queryFn: () => seriesAPI.getItem(id),
    select: (res) => res.data,
    staleTime: Infinity,
  });

  const normalizedData: Observation[] = useMemo(() => {
    if (!data?.observations) return [];

    return data.observations.map((el: any) => ({
      date: el.date,
      value: el.value,
    }));
  }, [data]);

  return { isLoading, data: normalizedData };
}
