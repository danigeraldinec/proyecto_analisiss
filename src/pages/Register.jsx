import React, { useState } from "react";
import axios from "axios";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleRegistro = async () => {
    try {
      const res = await axios.post("http://localhost:5000/register", {
        nombre,
        email,
        contraseña
      });
      setMensaje(res.data.message);
    } catch (err) {
      setMensaje("Error al registrar el usuario");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/fondo.jpg')" }}>
      <div className="bg-black bg-opacity-40 p-6 rounded-2xl w-80 text-white">
        <h2 className="text-xl font-bold mb-4 text-center">REGISTRO</h2>

        <input
          type="text"
          placeholder="Nombre"
          className="w-full mb-3 px-3 py-2 rounded bg-white text-black"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 rounded bg-white text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-4 px-3 py-2 rounded bg-white text-black"
          onChange={(e) => setContraseña(e.target.value)}
        />

        <button
          onClick={handleRegistro}
          className="bg-[#ff6b81] text-white px-6 py-2 rounded-full w-full">
          REGISTRAR
        </button>

        {mensaje && <p className="mt-3 text-center">{mensaje}</p>}
      </div>
    </div>
  );
}
