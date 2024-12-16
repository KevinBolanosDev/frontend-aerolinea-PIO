import React, { useState } from 'react';

export default function MaintenanceForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    tipo_mantenimiento: '',
    fecha_inicio: '',
    fecha_fin: '',
    duracion_horas: '',
    ubicacion: '',
    costo_mantenimiento: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ 
        tipo_mantenimiento: '',
        fecha_inicio: '',
        fecha_fin: '',
        duracion_horas: '',
        ubicacion: '',
        costo_mantenimiento: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Tipo de mantenimiento</label>
        <select
          type="date"
          name="fecha_inicio"
          value={formData.fecha_inicio}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
          >
          <option value="">Seleccione un tipo</option>
          <option value="economy">Preventivo</option>
          <option value="business">Correctivo</option>
          <option value="first">Overhaul</option>
          <option value="first">Inspección</option>
          <option value="first">Emegerncia</option>
        </select>
      </div>
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
        <label className="block mb-1">Fecha que finaliza</label>
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
        <label className="block mb-1">Duración horas</label>
        <input
          type="time"
          name="duracion_horas"
          value={formData.duracion_horas}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Ubicación</label>
        <textarea
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        ></textarea>
      </div>
      <div>
        <label className="block mb-1">Costo total</label>
        <label
          name="costo_mantenimiento"
          value={formData.costo_mantenimiento}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        ></label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Mantenimiento
      </button>
    </form>
  );
}

