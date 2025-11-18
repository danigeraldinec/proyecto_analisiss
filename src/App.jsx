import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReportGeneral from "./pages/ReportGeneral";
import ReportIncumplimiento from "./pages/ReportIncumplimiento";
import ReportTarifa from "./pages/ReportTarifa";
import Rutas from "./pages/Rutas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/reportes" element={<ReportGeneral />} />
        <Route path="/incumplimiento" element={<ReportIncumplimiento />} />
        <Route path="/tarifa" element={<ReportTarifa />} />

        <Route path="/rutas" element={<Rutas />} />
      </Routes>
    </BrowserRouter>
  );
}
