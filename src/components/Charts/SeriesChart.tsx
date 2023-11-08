import { lazy, Suspense } from "react";

import { Spinner } from "@/components";
import ChartWrapper from "./ChartWrapper";
import useGetSeriesObservation from "@/hooks/useGetSeriesObservation";

const CHARTS_COMPONENTS = {
  area: lazy(() => import("./AreaChart")),
  bar: lazy(() => import("./BarChart")),
};

interface ISeriesChartProps {
  seriesId: string;
  type: "area" | "bar";
}

export default function SeriesChart({ seriesId, type }: ISeriesChartProps) {
  const { isLoading, data } = useGetSeriesObservation(seriesId);

  const Chart = CHARTS_COMPONENTS[type];

  return isLoading ? (
    <Spinner />
  ) : (
    <Suspense>
      <ChartWrapper>
        <Chart data={data} />
      </ChartWrapper>
    </Suspense>
  );
}
