import { Text } from "libs/design";
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
import { useTheme } from "styled-components";
import TooltipWrapper from "../styles/Tooltip.styles";
import { currencyFormatter, genChartData } from "../utils";

interface Props {
  currency?: string;
  data?: [string, number][];
}

const MarketChart = ({ currency = "USD", data: rawData = [] }: Props) => {
  const data = genChartData(rawData);
  const theme = useTheme();
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
              <stop
                offset="0%"
                stopColor={theme.colors.highlight}
                stopOpacity={0.6}
              />
              <stop
                offset="75%"
                stopColor={theme.colors.highlight}
                stopOpacity={0.04}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke={theme.page.border}
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
                <TooltipWrapper>
                  <Text.Small className="label">
                    {new Date(label).toDateString()}
                  </Text.Small>
                  {payload &&
                    payload.length > 0 &&
                    payload.map((p, k) => (
                      <Text.Small key={k} className="price">
                        {p.value &&
                          currencyFormatter(currency, p.value as number)}
                      </Text.Small>
                    ))}
                </TooltipWrapper>
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
