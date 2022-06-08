import { Suspense } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { currencyFormatter, genChartData } from "./utils";

interface Props {
  currency?: string;
  data?: [string, number][];
}

const MarketChart = ({ currency = "USD", data: rawData = [] }: Props) => {
  const data = genChartData(rawData);

  return (
    <Suspense fallback={"Loading..."}>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F19" stopOpacity={0.6} />
              <stop offset="75%" stopColor="#F19" stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="#eee"
            strokeDasharray="5 5"
            horizontal
            vertical={false}
          />
          <XAxis
            dataKey="timestamp"
            axisLine={false}
            tickLine={false}
            tickFormatter={() => ""}
          />
          <YAxis
            dataKey="price"
            axisLine={false}
            scale="linear"
            tickLine={false}
            tickCount={8}
            domain={["dataMin", "dataMax"]}
            tickFormatter={(number) => currencyFormatter(currency, number)}
            fontSize="0.75rem"
          />
          <Tooltip
            content={({ active, payload, label }) =>
              active && (
                <div>
                  <p>{new Date(label).toLocaleString()}</p>
                  {payload &&
                    payload.length > 0 &&
                    payload.map((p, k) => (
                      <span key={k}>
                        {p.value &&
                          currencyFormatter(currency, p.value as number)}
                      </span>
                    ))}
                </div>
              )
            }
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#000000"
            fill="url(#color)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Suspense>
  );
};

export default MarketChart;
