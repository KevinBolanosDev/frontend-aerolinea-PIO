import React, { useState } from 'react';

export default function ReservationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    numero_tickete: '',
    numero_asiento: '',
    clase: '',
    estado: '',
    fecha_emision: '',
    fecha_limite: '',
    precio: ''
  });

//   numero_tickete VARCHAR(50) NOT NULL UNIQUE,
//   numero_asiento VARCHAR(50) NOT NULL,
//   clase VARCHAR(50) CHECK (clase IN ('economica', 'ejecutiva', 'primera clase')) NOT NULL,
//   estado VARCHAR(50) CHECK (estado IN ('emitido', 'usado', 'cancelado', 'expirado')) NOT NULL,
//   fecha_emision DATE NOT NULL,
//   fecha_limite DATE NOT NULL,
//   precio numeric(10, 2) NOT NULL,

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ numero_tickete: '',
        numero_asiento: '',
        clase: '',
        estado: '',
        fecha_emision: '',
        fecha_limite: '',
        precio: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Numero de Tickete</label>
        <input
          type="text"
          name="numero_tickete"
          value={formData.numero_tickete}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Número de Asiento</label>
        <input
          type="text"
          name="numero_asiento"
          value={formData.numero_asiento}
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
        <label className="block mb-1">Estado actual</label>
        <select
          name="estado"
          value={formData.estado}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        >
          <option value="">Estado</option>
          <option value="economy">Emitido</option>
          <option value="business">Usado</option>
          <option value="first">Cancelado</option>
          <option value="first">Expirado</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Fecha de emisión</label>
        <input
          type='date'
          name="fecha_emision"
          value={formData.fecha_emision}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Fecha limite</label>
        <input
          type='date'
          name="fecha_limite"
          value={formData.fecha_limite}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Precio total</label>
        <input
          type='number'
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Reserva
      </button>
    </form>
  );
}

