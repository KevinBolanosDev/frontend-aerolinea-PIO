import React, { useState } from 'react';

export default function FeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    clase: '',
    precio: '',
    moneda: '',
    fecha_inicio: '',
    fecha_fin:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ clase: '', precio: '', moneda: '', fecha_inicio: '', fecha_fin: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Fecha de inicio</label>
        <input
          type="date"
          name="fecha_inicio"
          value={formData.fecha_inicio}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Fecha de fin</label>
        <input
          type="date"
          name="fecha_fin"
          value={formData.fecha_fin}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Clase</label>
        <select
          name="clase"
          value={formData.clase}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        >
          <option value="">Seleccione una clase</option>
          <option value="economy">Económica</option>
          <option value="business">Negocios</option>
          <option value="first">Primera</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Precio</label>
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Moneda</label>
        <input
          type="text"
          name="moneda"
          value={formData.moneda}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Total Tarifa
      </button>
    </form>
  );
}

