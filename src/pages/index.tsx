import Link from "next/link";
import styles from "@/styles/main.module.css";
import { Skeleton } from "@/components/Skeleton";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenido a la página principal.</h1>
      <Link href="/login">
        <button className={styles.logIn}>Iniciar sesión</button>
      </Link>
    </div>
  );
};

export default Home;
