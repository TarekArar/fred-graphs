import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useSeries from "../../hooks/useSeriesChart";
import ChartRenderer from "./ChartRenderer";
import { ISeriesChartProps } from "./types";

import { memo } from "react";
import { Spinner } from "../index";

function SeriesAreaChart({ seriesId }: ISeriesChartProps) {
  const { isLoading, data } = useSeries(seriesId);

  return isLoading ? (
    <Spinner />
  ) : (
    <ChartRenderer>
      <AreaChart
        data={data}
        margin={{
          top: 40,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis domain={[-2, 2]} />
        <Tooltip />
        <Area dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ChartRenderer>
  );
}

export default memo(SeriesAreaChart);
