import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Sistema de Transporte</h1>

      <p className="mb-6 text-center">
        Bienvenido al sistema de consulta de rutas, reportes y perfil.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link to="/rutas" className="bg-white text-blue-600 py-2 rounded-lg text-center font-semibold shadow-md">
          Consultar Ruta
        </Link>

        <Link to="/reportes" className="bg-white text-blue-600 py-2 rounded-lg text-center font-semibold shadow-md">
          Hacer un Reporte
        </Link>

        <Link to="/perfil" className="bg-white text-blue-600 py-2 rounded-lg text-center font-semibold shadow-md">
          Mi Perfil
        </Link>
      </div>

      <div className="mt-8 flex flex-col gap-3 w-full max-w-xs">
        <Link to="/registro" className="bg-pink-500 py-2 rounded-lg text-center font-semibold shadow-md">
          Registrarte
        </Link>

        <Link to="/login" className="bg-pink-600 py-2 rounded-lg text-center font-semibold shadow-md">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}
