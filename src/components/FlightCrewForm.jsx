import React, { useState } from 'react';

export default function FlightCrewForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    rol: '',
    horas_servicio: '',
    estado: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ rol: '', horas_servicio: '', estado: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Su rol de empleado</label>
        <input
          type="text"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Disponibilidad</label>
        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        >
          <option value="">Disponibilidad del empleado</option>
          <option value="Vacaciones">Vacaciones</option>
          <option value="Suspendido">Suspendido</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Horas de servicio</label>
        <input
        type='number'
          name="horas_servicio"
          value={formData.horas_servicio}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        En construcción...
      </button>
    </form>
  );
}

