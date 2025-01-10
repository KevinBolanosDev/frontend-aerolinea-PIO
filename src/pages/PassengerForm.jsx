import React, { useState } from "react";

export default function PassengerForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    segundo_nombre: "",
    apellido: "",
    segundo_apellido: "",
    tipo_documento: "",
    numero_documento: "",
    fecha_nacimiento: "",
    nacionalidad: "",
    genero: "",
    pais: "",
    ciudad: "",
    telefono: "",
    email: "",
  });

  //   nombre VARCHAR(50) NOT NULL,
  //   segundo_nombre VARCHAR(50),
  //   apellido VARCHAR(50) NOT NULL,
  //   segundo_apellido VARCHAR(50),
  //   tipo_documento VARCHAR(50) NOT NULL,
  //   numero_documento TEXT NOT NULL UNIQUE,
  //   fecha_nacimiento DATE NOT NULL,
  //   nacionalidad VARCHAR(50) NOT NULL,
  //   genero VARCHAR(50) NOT NULL,
  //   pais VARCHAR(50) NOT NULL,
  //   ciudad VARCHAR(50) NOT NULL,
  //   telefono VARCHAR(50) NOT NULL,
  //   email VARCHAR(100) UNIQUE

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nombre: "",
      segundo_nombre: "",
      apellido: "",
      segundo_apellido: "",
      tipo_documento: "",
      numero_documento: "",
      fecha_nacimiento: "",
      nacionalidad: "",
      genero: "",
      pais: "",
      ciudad: "",
      telefono: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Nombre</label>
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
        <label className="block mb-1">Segundo Nombre</label>
        <input
          type="text"
          name="segundo_nombre"
          value={formData.segundo_nombre}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Apellido</label>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Segundo Apellido</label>
        <input
          type="text"
          name="segundo_apellido"
          value={formData.segundo_apellido}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Tipo de documento</label>
        <select
          name="tipo_documento"
          value={formData.tipo_documento}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        >
            <option value="">Selecciona tipo</option>
            <option value="">DNI Extranjero</option>
            <option value="">Pasaporte</option>
            <option value="">Cedula</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Numero de Documento</label>
        <input
          type="text"
          name="numero_documento"
          value={formData.numero_documento}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Fecha de nacimiento</label>
        <input
          type="date"
          name="fecha_nacimiento"
          value={formData.fecha_nacimiento}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Nacionalidad</label>
        <input
          type="text"
          name="nacionalidad"
          value={formData.nacionalidad}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Genero</label>
        <input
          type="text"
          name="genero"
          value={formData.genero}
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
        <label className="block mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Agregar Pasajero
      </button>
    </form>
  );
}
