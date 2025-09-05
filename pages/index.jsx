import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Gestión de Residuos Sólidos</h1>
        <p className="mt-4">Bienvenido al sistema de seguimiento.</p>
      </main>
    </div>
  );
}
