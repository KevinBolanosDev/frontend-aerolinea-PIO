import React, { useState } from 'react';

export default function AirlineForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    nombre_legal: '',
    estado: '',
    pais_origen: '',
    numero_empleados: '',
    sede_principal: '',
    telefono: '',
    email: '',
    cantidad_aviones: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: '', nombre_legal: '', estado: '', pais_origen: '', numero_empleados: '', sede_principal: '', telefono: '', email: '',      cantidad_aviones: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Nombre Aerolinea</label>
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
        <label className="block mb-1">Nombre Legal</label>
        <input
          type="text"
          name="nombre_legal"
          value={formData.nombre_legal}
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
      <div>
        <label className="block mb-1">País de origen</label>
        <input
          type="text"
          name="pais_origen"
          value={formData.pais_origen}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Número de empleados</label>
        <input
          type="number"
          name="numero_empleados"
          value={formData.numero_empleados}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Sede Principal</label>
        <input
          type="text"
          name="sede_principal"
          value={formData.sede_principal}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Telefono</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Correo Electronico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Cantidad de aviones</label>
        <input
          type="number"
          name="cantidad_aviones"
          value={formData.cantidad_aviones}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="hover:bg-cyan-800 bg-cyan-600  hover: text-white w-[100%] px-4 py-2 rounded">
        Agregar Aerolínea
      </button>
    </form>
  );
}