import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import type { DailyPrice } from "../types/stock.ts";
import "./PriceChart.css";

export default function PriceChart({ prices }: { prices: DailyPrice[] }) {
  const chartData = [...prices].reverse();

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} interval="preserveStartEnd" />
          <YAxis tick={{ fontSize: 12 }} domain={["auto", "auto"]} />
          <Tooltip formatter={(value) => [`$${Number(value).toFixed(2)}`, "Close"]} />
          <Line type="monotone" dataKey="close" stroke="var(--accent)" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
