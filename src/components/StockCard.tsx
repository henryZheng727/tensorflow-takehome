import { useState } from "react";
import { Link } from "react-router-dom";
import type { StockListItem } from "../types/stock.ts";
import "./StockCard.css";

export default function StockCard({ stock }: { stock: StockListItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link to={`/stock/${stock.symbol}`} className="stock-card">
      <div className="stock-card-top">
        {imgError ? (
          <div className="stock-card-fallback">{stock.name[0]}</div>
        ) : (
          <img
            src={stock.logo}
            alt={`${stock.name} logo`}
            className="stock-card-logo"
            width={40}
            height={40}
            onError={() => setImgError(true)}
          />
        )}
        <div className="stock-card-info">
          <span className="stock-card-symbol">{stock.symbol}</span>
          <span className="stock-card-name">{stock.name}</span>
        </div>
      </div>
      <span className="stock-card-sector">{stock.sector}</span>
    </Link>
  );
}
