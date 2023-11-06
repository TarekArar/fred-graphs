import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import seriesAPI from "../apis/seriesAPI";

export default function useSeries(id: string) {
  const { isLoading, data } = useQuery({
    queryKey: ["Serie", id],
    queryFn: () => seriesAPI.getItem(id),
    select: (res) => res.data,
    staleTime: Infinity,
  });

  const normalizedData = useMemo(() => {
    if (!data?.observations) return [];

    return data.observations.map((el: any) => ({
      year: el.date.split("-")[0],
      value: el.value,
    }));
  }, [data]);

  return { isLoading, data: normalizedData };
}
