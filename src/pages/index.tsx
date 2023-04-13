import Link from "next/link";

const Home = () => {
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
