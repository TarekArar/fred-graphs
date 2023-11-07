import useSeries from "@/hooks/useSeriesChart";

import { Spinner } from "@/components";
import { lazy } from "react";

const ChartWrapper = lazy(() => import("./ChartWrapper"));

const CHARTS_COMPONENTS = {
  area: lazy(() => import("./AreaChart")),
  bar: lazy(() => import("./BarChart")),
};

interface ISeriesChartProps {
  seriesId: string;
  type: "area" | "bar";
}

export default function SeriesChart({ seriesId, type }: ISeriesChartProps) {
  const { isLoading, data } = useSeries(seriesId);

  const Chart = CHARTS_COMPONENTS[type];

  return isLoading ? (
    <Spinner />
  ) : (
    <ChartWrapper>
      <Chart data={data} />
    </ChartWrapper>
  );
}
