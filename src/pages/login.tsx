import Link from "next/link";
import { FormEvent, useState } from "react";
import { LoginData } from "types";
import styles from "@/styles/login.module.css";

const verifyLogin = (data: LoginData): boolean => {
  return data.email === "grupoASD@gmail.com" && data.password === "Rjs2022*";
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: LoginData = { email, password };
    console.log(data);
    if (verifyLogin(data)) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
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
      </form>
      {valid && (
        <p>
          ¡Formulario válido!
          <Link href="/table">
            <span style={{ color: "gray", textDecoration: "underline" }}>
              Ir a Home
            </span>
          </Link>
        </p>
      )}
      {!valid && <p>¡Formulario inválido!</p>}
    </div>
  );
}
