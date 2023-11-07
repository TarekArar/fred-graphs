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

import { Observation } from "@/types";
import { memo } from "react";

interface IBarChartProps {
  data: Observation[];
  sliceValue?: number;
}

function CustomBarChart({ data, sliceValue = -20 }: IBarChartProps) {
  const slicedData = data.slice(sliceValue);

  return (
    <BarChart
      width={1200}
      height={550}
      data={slicedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis
        domain={[
          0,
          Math.round(Math.max(...slicedData.map((el: any) => el.value)) * 1.1),
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
  );
}

export default memo(CustomBarChart);
