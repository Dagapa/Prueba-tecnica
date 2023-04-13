import { useEffect, useState } from "react";
import { TickerData } from "types";

export const useTickers = () => {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  async function getTickers() {
    try {
      const response = await fetch(
        "https://api.wazirx.com/sapi/v1/tickers/24hr"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Ocurrió un error al obtener los tickers: ", error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!tickers.length) {
        getTickers()
          .then((response) => {
            setTickers(response);
            setIsLoaded(true);
          })
          .catch((error) => console.log(error));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoaded]);

  return tickers;
};