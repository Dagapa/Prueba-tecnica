import Link from "next/link";
import { useTickers } from "@/hooks/useTickers";

const Home = () => {
  const tickers = useTickers();

  return (
    <div>
      <h1>Bienvenido a la página principal.</h1>
      <Link href="/login">
        <button>Iniciar sesión</button>
      </Link>
    </div>
  );
};

export default Home;
