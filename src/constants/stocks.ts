import type { StockListItem } from "../types/stock.ts";

function logo(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

export const STOCKS: StockListItem[] = [
  { symbol: "AAPL",  name: "Apple",              sector: "Technology",        logo: logo("apple.com") },
  { symbol: "MSFT",  name: "Microsoft",           sector: "Technology",        logo: logo("microsoft.com") },
  { symbol: "GOOGL", name: "Alphabet",            sector: "Technology",        logo: logo("google.com") },
  { symbol: "AMZN",  name: "Amazon",              sector: "Consumer Cyclical", logo: logo("amazon.com") },
  { symbol: "NVDA",  name: "NVIDIA",              sector: "Technology",        logo: logo("nvidia.com") },
  { symbol: "META",  name: "Meta Platforms",       sector: "Technology",        logo: logo("meta.com") },
  { symbol: "TSLA",  name: "Tesla",               sector: "Consumer Cyclical", logo: logo("tesla.com") },
  { symbol: "JPM",   name: "JPMorgan Chase",      sector: "Financial",         logo: logo("jpmorganchase.com") },
  { symbol: "V",     name: "Visa",                sector: "Financial",         logo: logo("visa.com") },
  { symbol: "JNJ",   name: "Johnson & Johnson",   sector: "Healthcare",        logo: logo("jnj.com") },
  { symbol: "WMT",   name: "Walmart",             sector: "Consumer Defensive",logo: logo("walmart.com") },
  { symbol: "PG",    name: "Procter & Gamble",    sector: "Consumer Defensive",logo: logo("pg.com") },
  { symbol: "MA",    name: "Mastercard",          sector: "Financial",         logo: logo("mastercard.com") },
  { symbol: "HD",    name: "Home Depot",          sector: "Consumer Cyclical", logo: logo("homedepot.com") },
  { symbol: "DIS",   name: "Disney",              sector: "Communication",     logo: logo("disney.com") },
  { symbol: "NFLX",  name: "Netflix",             sector: "Communication",     logo: logo("netflix.com") },
  { symbol: "KO",    name: "Coca-Cola",           sector: "Consumer Defensive",logo: logo("coca-cola.com") },
  { symbol: "PEP",   name: "PepsiCo",             sector: "Consumer Defensive",logo: logo("pepsico.com") },
  { symbol: "INTC",  name: "Intel",               sector: "Technology",        logo: logo("intel.com") },
  { symbol: "AMD",   name: "AMD",                 sector: "Technology",        logo: logo("amd.com") },
];
