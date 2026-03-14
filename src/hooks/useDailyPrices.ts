import { useState, useEffect } from "react";
import type { DailyPrice } from "../types/stock.ts";
import { getDailyPrices } from "../api/alphaVantage.ts";

interface Result {
  symbol: string;
  data: DailyPrice[] | null;
  error: string | null;
}

export function useDailyPrices(symbol: string) {
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    let cancelled = false;
    getDailyPrices(symbol)
      .then((data) => { if (!cancelled) setResult({ symbol, data, error: null }); })
      .catch((err: Error) => { if (!cancelled) setResult({ symbol, data: null, error: err.message }); });
    return () => { cancelled = true; };
  }, [symbol]);

  const loading = !result || result.symbol !== symbol;
  const data = result?.symbol === symbol ? result.data : null;
  const error = result?.symbol === symbol ? result.error : null;

  return { data, loading, error };
}
