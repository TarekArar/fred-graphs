import { ResponsiveContainer } from "recharts";

interface IChartWrapperProps {
  children: React.ReactElement;
}

export default function ChartWrapper({ children }: IChartWrapperProps) {
  return (
    <div className="w-[80vw] h-[80vh] flex items-center justify-center">
      <ResponsiveContainer width="90%" height="90%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}
