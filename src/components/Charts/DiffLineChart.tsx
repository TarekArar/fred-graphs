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
import useGetSeriesObservation from "@/hooks/useGetSeriesObservation";

import { Observation } from "@/types";
import ChartWrapper from "./ChartWrapper";

interface DiffLineChartProps {
  seriesIds: [string, string];
}

function DiffLineChart({ seriesIds }: DiffLineChartProps) {
  const {
    isError: isErr1,
    isLoading: isL1,
    data: d1,
  } = useGetSeriesObservation(seriesIds[0]);
  const {
    isError: isErr2,
    isLoading: isL2,
    data: d2,
  } = useGetSeriesObservation(seriesIds[1]);

  const isLoading = isL1 && isL2;

  const isError = isErr1 || isErr2;

  const data: Observation[] = useMemo(() => {
    if (!d1 || !d2) return [];

    const diff: Observation[] = [];

    d1.forEach((el: Observation) => {
      const secondItem = d2.find((el2: Observation) => el2.date === el.date);
      if (!secondItem?.value || Number.isNaN(secondItem.value)) return;

      diff.push({
        date: el.date,
        value: Number(secondItem.value) - Number(el.value),
      });
    });

    return diff;
  }, [d1, d2]);

  if (isError)
    return (
      <h3 className="text-red-500 mt-8">
        Oops An Error Occured, Please Try Again Later
      </h3>
    );

  if (isLoading) return <Spinner />;

  return (
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
        <Line type="monotone" dataKey="value" stroke="#8884d8" dot={<></>} />
      </LineChart>
    </ChartWrapper>
  );
}

export default memo(DiffLineChart);
