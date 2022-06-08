import { ChartItem } from "./data";

export const genChartData = (data: [string, number][] = []) =>
  data
    .map(
      (d) =>
        new (ChartItem as any)({
          timestamp: d[0],
          price: d[1],
        })
    )
    // @ts-ignore
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

export const currencyFormatter = (
  currency: Intl.NumberFormatOptions["currency"],
  amount: number
) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
