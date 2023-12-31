import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import seriesAPI from "@/apis/seriesAPI";
import { Observation } from "@/types";

export default function useGetSeriesObservation(id: string) {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["Serie", id],
    queryFn: () => seriesAPI.getSeriesObservation(id),
    select: (res) => res.data,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity, // fetch data once and keep it on cache since the data isnt changing
  });

  const normalizedData: Observation[] = useMemo(() => {
    if (!data?.observations) return [];

    return data.observations.map((el: Observation) => ({
      date: el.date,
      value: el.value,
    }));
  }, [data]);

  return { isError, isLoading, data: normalizedData };
}
