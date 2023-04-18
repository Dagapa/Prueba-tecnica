import { SortCellProps } from "types";
import styles from "@/styles/sortCell.module.css";

export const SortCell: React.FC<SortCellProps> = ({
  label,
  fieldName,
  sortDirection,
  onSort,
}) => {
  const handleClick = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    onSort(fieldName, newSortDirection);
  };

  return (
    <th onClick={handleClick} className={styles.tHead}>
      {label}
      <span className={styles.sort}>
        <button
          onClick={() => onSort(fieldName, "asc")}
          disabled={sortDirection === "asc"}
        >
          ▲
        </button>
        <button
          onClick={() => onSort(fieldName, "desc")}
          disabled={sortDirection === "desc"}
        >
          ▼
        </button>
      </span>
    </th>
  );
};
