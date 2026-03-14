import type { CompanyOverview, TimeSeriesDailyResponse, DailyPrice } from "../types/stock.ts";

const API_KEY = import.meta.env.VITE_ALPHAVANTAGE_API_KEY || "demo";
const BASE_URL = "https://www.alphavantage.co/query";

const cache = new Map<string, unknown>();

async function fetchWithCache<T>(url: string): Promise<T> {
  if (cache.has(url)) return cache.get(url) as T;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API request failed: ${res.status}`);
  const data: unknown = await res.json();
  if (typeof data === "object" && data !== null && ("Information" in data || "Note" in data)) {
    const msg = (data as Record<string, string>).Information ?? (data as Record<string, string>).Note;
    throw new Error(msg);
  }
  cache.set(url, data);
  return data as T;
}

export async function getCompanyOverview(symbol: string): Promise<CompanyOverview> {
  const url = `${BASE_URL}?function=OVERVIEW&symbol=${encodeURIComponent(symbol)}&apikey=${API_KEY}`;
  return fetchWithCache<CompanyOverview>(url);
}

export async function getDailyPrices(symbol: string): Promise<DailyPrice[]> {
  const url = `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${encodeURIComponent(symbol)}&outputsize=compact&apikey=${API_KEY}`;
  const raw = await fetchWithCache<TimeSeriesDailyResponse>(url);
  const series = raw["Time Series (Daily)"];
  if (!series) throw new Error("No price data available for this symbol");
  const dates = Object.keys(series).sort();

  return dates.map((date, i) => {
    const entry = series[date];
    const close = parseFloat(entry["4. close"]);
    const prevClose = i > 0 ? parseFloat(series[dates[i - 1]]["4. close"]) : close;
    return {
      date,
      open: parseFloat(entry["1. open"]),
      high: parseFloat(entry["2. high"]),
      low: parseFloat(entry["3. low"]),
      close,
      volume: parseInt(entry["5. volume"], 10),
      percentChange: i > 0 ? ((close - prevClose) / prevClose) * 100 : 0,
    };
  }).reverse();
}
