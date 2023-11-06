import { ResponsiveContainer } from "recharts";

interface IChartRendererProps {
  children: React.ReactNode;
}

export default function ChartRenderer({ children }: IChartRendererProps) {
  return (
    <div className="w-[80vw] h-[80vh] flex items-center justify-center">
      <ResponsiveContainer width="90%" height="90%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}
