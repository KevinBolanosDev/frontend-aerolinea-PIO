import React, { useState } from 'react';

export default function AirplaneForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    modelo: '',
    capacidad_pasajeros: '',
    capacidad_carga_kg: '',
    fecha_fabricacion: '',
    estado: '',
    ultimo_mantenimiento: '',
    proximo_mantenimiento: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ modelo: '', capacidad_pasajeros: '', capacidad_carga_kg: '', fecha_fabricacion: '', estado: '', ultimo_mantenimiento: '',
        proximo_mantenimiento: ''
     });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Modelo</label>
        <input
          type="text"
          name="modelo"
          value={formData.modelo}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Capacidad de pasajeros</label>
        <input
          type="number"
          name="capacidad_pasajeros"
          value={formData.capacidad_pasajeros}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Capacidad de carga en kg</label>
        <input
          type="text"
          name="capacidad_carga_kg"
          value={formData.capacidad_carga_kg}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Fecha de fabricación</label>
        <input
          type="text"
          name="fecha_fabricacion"
          value={formData.fecha_fabricacion}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">estado</label>
        <input
          type="text"
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Ultimo mantenimiento</label>
        <input
          type="text"
          name="ultimo_mantenimiento"
          value={formData.ultimo_mantenimiento}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Proximo mantenimiento</label>
        <input
          type="text"
          name="proximo_mantenimiento"
          value={formData.proximo_mantenimiento}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Avión
      </button>
    </form>
  );
}

