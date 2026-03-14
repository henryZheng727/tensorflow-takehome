import type { DailyPrice } from "../types/stock.ts";
import "./PriceTable.css";

export default function PriceTable({ prices }: { prices: DailyPrice[] }) {
  return (
    <div className="price-table-container">
      <table className="price-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Close</th>
            <th>Volume</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((price) => (
            <tr key={price.date}>
              <td>{price.date}</td>
              <td>${price.close.toFixed(2)}</td>
              <td>{price.volume.toLocaleString()}</td>
              <td
                style={{
                  color:
                    price.percentChange > 0
                      ? "var(--positive)"
                      : price.percentChange < 0
                        ? "var(--negative)"
                        : undefined,
                }}
              >
                {price.percentChange > 0 ? "+" : ""}
                {price.percentChange.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
