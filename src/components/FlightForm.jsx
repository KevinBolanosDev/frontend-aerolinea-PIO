import React, { useState } from "react";

export default function FlightForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    asientos_disponibles: "",
    asientos_ocupados: "",
    fecha_salida: "",
    fecha_llegada: "",
    numero_vuelo: "",
    origen: "",
    destino: "",
    duracion_estimada: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      asientos_disponibles: "",
      asientos_ocupados: "",
      fecha_salida: "",
      fecha_llegada: "",
      numero_vuelo: "",
      origen: "",
      destino: "",
      duracion_estimada: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Número de Vuelo</label>
        <input
          type="number"
          name="numero_vuelo"
          value={formData.numero_vuelo}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Asientos disponibles</label>
        <input
          type="number"
          name="asientos_disponibles"
          value={formData.asientos_disponibles}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Fecha de salida</label>
        <input
          type="datetime-local"
          name="fecha_salida"
          value={formData.fecha_salida}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Fecha de llegada</label>
        <input
          type="datetime-local"
          name="fecha_llegada"
          value={formData.fecha_llegada}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Origen</label>
        <input
          type="text"
          name="origen"
          value={formData.origen}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Destino</label>
        <input
          type="text"
          name="destino"
          value={formData.destino}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Duración estimada</label>
        <input
          type="time"
          name="duracion_estimada"
          value={formData.duracion_estimada}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Agregar Vuelo
      </button>
    </form>
  );
}
