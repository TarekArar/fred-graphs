import { memo, useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Spinner } from "..";
import useSeries from "@/hooks/useSeriesChart";

import { Observation } from "@/types";
import ChartWrapper from "./ChartWrapper";

interface DiffLineChartProps {
  seriesIds: [string, string];
}

function DiffLineChart({ seriesIds }: DiffLineChartProps) {
  const { isLoading: isL1, data: d1 } = useSeries(seriesIds[0]);
  const { isLoading: isL2, data: d2 } = useSeries(seriesIds[1]);

  const isLoading = isL1 && isL2;

  const data: Observation[] = useMemo(() => {
    if (!d1 || !d2) return [];

    const diff: Observation[] = [];

    d1.forEach((el: Observation) => {
      const secondItem = d2.find((el2: Observation) => el2.date === el.date);
      if (!secondItem?.value) return;

      diff.push({
        date: el.date,
        value: Number(secondItem.value) - Number(el.value),
      });
    });

    return diff;
  }, [d1, d2]);

  return isLoading ? (
    <Spinner />
  ) : (
    <ChartWrapper>
      <LineChart
        width={1200}
        height={550}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={null} />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ChartWrapper>
  );
}

export default memo(DiffLineChart);
