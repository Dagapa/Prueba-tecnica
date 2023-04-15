import Link from "next/link";
import { useCallback, useState } from "react";
import { LoginData } from "types";
import styles from "@/styles/login.module.css";
import { verifyLogin } from "@/utils/verifyLogin";
import { RequiredLogin } from "@/components/RequiredLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data: LoginData = { email, password };
      if (isValidEmail(email)) {
        const isValid = verifyLogin(data);
        setValid(isValid);
        if (!isValid) {
          setError(
            "Las credenciales son incorrectas. Por favor, intenta nuevamente."
          );
        }
      } else {
        setError("Email invalido");
      }
    },
    [email, password]
  );

  return (
    <div className={styles["form-container"]}>
      {valid ? (
        <div className={styles.success}>
          <h3>¡Inicio de sesión exitoso!</h3>
          <Link href="/table">
            <button className={styles["success-button"]}>Ver los datos</button>
          </Link>
        </div>
      ) : (
        <RequiredLogin />
      )}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Iniciar sesión</h2>
        <input
          type="email"
          placeholder="email"
          pattern="[A-Za-z0-9._%+-]+[A-Z]*@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          maxLength={25}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          pattern="(?=.*[A-Z])[A-Za-z0-9@$!%*?&]{8,10}"
          required
          maxLength={10}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <button type="submit">Login</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
