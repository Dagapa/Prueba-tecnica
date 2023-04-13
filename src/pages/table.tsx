import { TickerData } from "types";
import styles from "@/styles/table.module.css";
import { useTickers } from "@/hooks/useTickers";
import { useState } from "react";
import { SortCell } from "@/components/SortCell";

type SortDirection = "asc" | "desc";

export const Table: React.FC = () => {
  const { tickers, isLoaded, error } = useTickers();
  const [sortField, setSortField] = useState<keyof TickerData>("symbol");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const tickersData = tickers.sort((a, b) => {
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

  const formatDate = (at: number) => {
    const date = new Date(at);
    const day = date.getDay().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

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
