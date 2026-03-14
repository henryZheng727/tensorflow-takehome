import { STOCKS } from "../constants/stocks.ts";
import StockCard from "../components/StockCard.tsx";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-title">Stock Market</h1>
      <div className="stock-grid">
        {STOCKS.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </div>
    </div>
  );
}
