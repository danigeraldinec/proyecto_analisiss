export default function ReportIncumplimiento() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4 text-blue-600">
        Reportar Incumplimiento
      </h1>

      <label className="font-semibold">Línea del minibús:</label>
      <select className="border p-2 rounded w-full mb-3">
        <option>Selecciona una ruta</option>
      </select>

      <label className="font-semibold">Ubicación:</label>
      <input className="border p-2 rounded w-full mb-3" placeholder="Ej: Plaza San Francisco" />

      <label className="font-semibold">Descripción:</label>
      <textarea className="border p-2 rounded w-full h-24 mb-4"></textarea>

      <button className="bg-blue-600 text-white w-full py-2 rounded">
        Enviar Queja
      </button>
    </div>
  );
}
