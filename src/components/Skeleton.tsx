import styles from "@/styles/skeleton.module.css";

export const Skeleton = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {[...Array(15)].map((_, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? styles["row-even"] : styles["odd-row"]}
          >
            <td>{"  "}</td>
            <td>{"  "}</td>
            <td>{"  "}</td>
            <td>{"  "}</td>
            <td>{"  "}</td>
            <td>{"  "}</td>
            <td>{"  "}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
