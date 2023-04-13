import { useCallback, useEffect, useState } from "react";
import { TickerData } from "types";

type TickersHookResult = {
  tickers: TickerData[];
  isLoaded: boolean;
  error: Error | null;
};

const fetchTickersData = async (): Promise<TickerData[]> => {
  const response = await fetch("https://api.wazirx.com/sapi/v1/tickers/24hr");
  return response.json();
};

export const useTickers = (intervalMs = 5000): TickersHookResult => {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchTickers = useCallback(async () => {
    try {
      const data = await fetchTickersData();
      setTickers(data);
      setIsLoaded(true);
      setError(null);
    } catch (error) {
      setError(error as Error);
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isLoaded) {
        fetchTickers().catch((error) => setError(error));
      }
    }, intervalMs);
    return () => clearInterval(intervalId);
  }, [fetchTickers, intervalMs, isLoaded]);


  return { tickers, isLoaded, error };
};
