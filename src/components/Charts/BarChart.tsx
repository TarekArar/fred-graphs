import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

import { ISeriesChartProps } from "./types";
import useSeries from "../../hooks/useSeriesChart";
import ChartRenderer from "./ChartRenderer";

import { memo } from "react";
import { Spinner } from "../index";

function SeriesAreaChart({ seriesId }: ISeriesChartProps) {
  const { isLoading, data } = useSeries(seriesId);

  return isLoading ? (
    <Spinner />
  ) : (
    <ChartRenderer>
      <BarChart
        width={500}
        height={300}
        data={data.slice(-20)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          domain={[
            0,
            Math.round(
              Math.max(...data.slice(-20).map((el) => el.value)) * 1.1
            ),
          ]}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ChartRenderer>
  );
}

export default memo(SeriesAreaChart);
