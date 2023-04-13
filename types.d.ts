export interface LoginData {
  email: string;
  password: string;
}

export interface TickerData {
  symbol: string;
  baseAsset: string;
  quoteAsset: string;
  openPrice: string;
  lowPrice: string;
  highPrice: string;
  lastPrice: string;
  volume: string;
  bidPrice: string;
  askPrice: string;
  at: number;
}

export interface TickersProps {
  tickers: Record<string, TickerData>;
}

