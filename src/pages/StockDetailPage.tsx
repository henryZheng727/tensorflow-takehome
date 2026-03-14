import { useParams, Link } from "react-router-dom";
import { STOCKS } from "../constants/stocks.ts";
import { useCompanyOverview } from "../hooks/useCompanyOverview.ts";
import { useDailyPrices } from "../hooks/useDailyPrices.ts";
import CompanyInfo from "../components/CompanyInfo.tsx";
import PriceTable from "../components/PriceTable.tsx";
import PriceChart from "../components/PriceChart.tsx";
import Loader from "../components/Loader.tsx";
import "./StockDetailPage.css";

export default function StockDetailPage() {
  const { symbol } = useParams<{ symbol: string }>();
  const stockInfo = STOCKS.find((s) => s.symbol === symbol);
  const displayName = stockInfo?.name ?? symbol;

  const overview = useCompanyOverview(symbol!);
  const prices = useDailyPrices(symbol!);

  const loading = overview.loading || prices.loading;
  const error = overview.error || prices.error;

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="detail-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Link to="/" className="detail-back">&larr; Back to Dashboard</Link>

      <div className="detail-header">
        {stockInfo && (
          <img
            src={stockInfo.logo}
            alt={`${displayName} logo`}
            className="detail-logo"
            width={48}
            height={48}
          />
        )}
        <h1>{displayName} ({symbol})</h1>
      </div>

      {overview.data && <CompanyInfo overview={overview.data} />}

      {prices.data && (
        <>
          <section className="detail-section">
            <h2>Price History</h2>
            <PriceChart prices={prices.data} />
          </section>

          <section className="detail-section">
            <h2>Historical Prices</h2>
            <PriceTable prices={prices.data} />
          </section>
        </>
      )}
    </div>
  );
}
