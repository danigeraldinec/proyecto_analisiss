export default function ReportGeneral() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">
        Reporte del Sistema de Transporte
      </h1>

      <label className="block font-semibold mb-1">Tipo de reporte:</label>
      <select className="border p-2 rounded w-full mb-4">
        <option>Selecciona una opción</option>
        <option>Incumplimiento</option>
        <option>Tarifa Incorrecta</option>
        <option>Problema General</option>
      </select>

      <label className="block font-semibold mb-1">Descripción del problema:</label>
      <textarea className="border p-2 rounded w-full h-28 mb-4"></textarea>

      <button className="bg-blue-600 w-full py-2 text-white rounded">
        Enviar Reporte
      </button>
    </div>
  );
}
