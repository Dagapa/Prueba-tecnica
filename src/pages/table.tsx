import { TickerData } from "types";
import styles from "@/styles/table.module.css";

export const Table: React.FC<{ data: TickerData[] }> = ({ data }) => {
  const formatDate = (at: number) => {
    const date = new Date(at);
    const day = date.getDay().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quote Asset</th>
          <th>Open Price</th>
          <th>Low Price</th>
          <th>High Price</th>
          <th>Last Price</th>
          <th>At</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
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
