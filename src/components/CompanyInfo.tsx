import type { CompanyOverview } from "../types/stock.ts";
import "./CompanyInfo.css";

function displayValue(value: string | undefined | null): string {
  if (!value || value === "None") return "N/A";
  return value;
}

function formatMarketCap(raw: string | undefined | null): string {
  if (!raw || raw === "None") return "N/A";
  const num = parseFloat(raw);
  if (isNaN(num)) return "N/A";
  if (num >= 1_000_000_000_000) return `$${(num / 1_000_000_000_000).toFixed(2)}T`;
  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
  return `$${num.toLocaleString()}`;
}

export default function CompanyInfo({ overview }: { overview: CompanyOverview }) {
  return (
    <div className="company-info">
      <h2>Company Overview</h2>
      <div className="company-info-grid">
        <div className="company-info-field">
          <span className="company-info-label">Symbol</span>
          <span className="company-info-value">{displayValue(overview.Symbol)}</span>
        </div>
        <div className="company-info-field">
          <span className="company-info-label">Asset Type</span>
          <span className="company-info-value">{displayValue(overview.AssetType)}</span>
        </div>
        <div className="company-info-field">
          <span className="company-info-label">Exchange</span>
          <span className="company-info-value">{displayValue(overview.Exchange)}</span>
        </div>
        <div className="company-info-field">
          <span className="company-info-label">Sector</span>
          <span className="company-info-value">{displayValue(overview.Sector)}</span>
        </div>
        <div className="company-info-field">
          <span className="company-info-label">Industry</span>
          <span className="company-info-value">{displayValue(overview.Industry)}</span>
        </div>
        <div className="company-info-field">
          <span className="company-info-label">Market Cap</span>
          <span className="company-info-value">{formatMarketCap(overview.MarketCapitalization)}</span>
        </div>
      </div>
      {overview.Description && overview.Description !== "None" && (
        <p className="company-info-description">{overview.Description}</p>
      )}
    </div>
  );
}
