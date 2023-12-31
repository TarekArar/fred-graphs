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
  const { isError, isLoading, data } = useGetSeriesObservation(seriesId);

  const Chart = CHARTS_COMPONENTS[type];

  if (isError)
    return (
      <h3 className="text-red-500 mt-8">
        Oops An Error Occured, Please Try Again Later
      </h3>
    );

  if (isLoading) return <Spinner />;

  return (
    <Suspense>
      <ChartWrapper>
        <Chart data={data} />
      </ChartWrapper>
    </Suspense>
  );
}
