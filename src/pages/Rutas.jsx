export default function Rutas() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-blue-600">Buscar Ruta</h1>

      <label className="font-semibold">Punto de inicio:</label>
      <input className="border p-2 rounded w-full mb-3" />

      <label className="font-semibold">Destino:</label>
      <input className="border p-2 rounded w-full mb-3" />

      <button className="bg-blue-600 text-white w-full py-2 rounded mb-4">
        Buscar Ruta
      </button>

      <div className="w-full h-96 bg-gray-300 rounded-lg">
        <p className="text-center pt-40 text-gray-600">
          Aquí irá el mapa
        </p>
      </div>
    </div>
  );
}
