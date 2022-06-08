import { Area, AreaChart, ResponsiveContainer, XAxis } from "recharts";
import { genChartData } from "./utils";

interface Props {
  data?: [string, number][];
}

const QuickChart = ({ data: rawData = [] }: Props) => {
  const data = genChartData(rawData);

  if (data.length === 0) return null;

  return (
    <ResponsiveContainer width={200} height={100}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F19" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#F19" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area dataKey="price" stroke="#F19" fill="url(#color)" />
        <XAxis dataKey="timestamp" axisLine={false} tickLine={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default QuickChart;
