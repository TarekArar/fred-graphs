import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { Observation } from "@/types";
import { memo } from "react";

interface IAreaChartProps {
  data: Observation[];
}

function CustomAreaChart({ data }: IAreaChartProps) {
  return (
    <AreaChart
      width={1200}
      height={550}
      data={data}
      margin={{
        top: 40,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis domain={[-2, 2]} />
      <Tooltip />
      <Area dataKey="value" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}

export default memo(CustomAreaChart);
