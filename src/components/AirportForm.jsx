import React, { useState } from 'react';

export default function AirportForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    ciudad: '',
    pais: '',
    codigo_iata: '',
    estado: ''
  });
//   nombre VARCHAR(50) NOT NULL,
//   ciudad VARCHAR(50) NOT NULL,
//   pais VARCHAR(50) NOT NULL,
//   codigo_iata VARCHAR(50) NOT NULL UNIQUE,
//   estado VARCHAR(50) CHECK (estado IN ('activo', 'cerrado')) NOT NULL
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: '', ciudad: '', pais: '', codigo_iata: '', estado: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Nombre del Aeropuerto</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Ciudad</label>
        <input
          type="text"
          name="ciudad"
          value={formData.ciudad}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Pais</label>
        <input
          type="text"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Codigo IATA</label>
        <input
          type="text"
          name="codigo_iata"
          value={formData.codigo_iata}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Estado</label>
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Aeropuerto
      </button>
    </form>
  );
}

