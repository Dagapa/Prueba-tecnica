import styles from "@/styles/requiredLogin.module.css";

export const RequiredLogin = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Email: máximo 25 caracteres, mínimo 3 caracteres.</li>
        <br />
        <li>
          Password: máximo 10 caracteres, mínimo 8 caracteres, debe tener por lo
          menos una mayúscula y un caracter especial.
        </li>
      </ul>
    </div>
  );
};
