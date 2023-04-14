import { useEffect, useState } from "react";
import { TickerData } from "types";
import { useTickers } from "@/hooks/useTickers";
import { SortCell } from "@/components/SortCell";
import { formatDate } from "@/utils/dateUtils";
import styles from "@/styles/table.module.css";

type SortDirection = "asc" | "desc";

const DEFAULT_SORT_FIELD = "symbol";
const DEFAULT_SORT_DIRECTION: SortDirection = "asc";

const sortTickers = (
  tickers: TickerData[],
  sortField: keyof TickerData,
  sortDirection: SortDirection
): TickerData[] => {
  const sortedTickers = tickers.sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (sortDirection === "asc") {
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    } else {
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
      return 0;
    }
  });

  return sortedTickers;
};

const Table: React.FC = () => {
  const { tickers, isLoaded, error } = useTickers();
  const [sortField, setSortField] =
    useState<keyof TickerData>(DEFAULT_SORT_FIELD);
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    DEFAULT_SORT_DIRECTION
  );
  const [tickersData, setTickersData] = useState<TickerData[]>([]);

  useEffect(() => {
    if (isLoaded) {
      setTickersData(sortTickers(tickers, sortField, sortDirection));
    }
  }, [isLoaded, tickers, sortField, sortDirection]);

  const handleSort = (
    fieldName: keyof TickerData,
    sortDirection: SortDirection
  ) => {
    setSortField(fieldName);
    setSortDirection(sortDirection);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <SortCell
            label="Symbol"
            fieldName="symbol"
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <SortCell
            label="Quote Asset"
            fieldName="quoteAsset"
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <SortCell
            label="Open Price"
            fieldName="openPrice"
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <SortCell
            label="Low Price"
            fieldName="lowPrice"
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <SortCell
            label="High Price"
            fieldName="highPrice"
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <SortCell
            label="Last Price"
            fieldName="lastPrice"
            sortDirection={sortDirection}
            onSort={handleSort}
          />
          <SortCell
            label="At"
            fieldName="at"
            sortDirection={sortDirection}
            onSort={handleSort}
          />
        </tr>
      </thead>
      <tbody>
        {tickersData.map((item, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? styles["row-even"] : styles["odd-row"]}
          >
            <td>{item.symbol}</td>
            <td>{item.quoteAsset}</td>
            <td>{item.openPrice}</td>
            <td>{item.lowPrice}</td>
            <td>{item.highPrice}</td>
            <td>{item.lastPrice}</td>
            <td>{formatDate(item.at)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
