import React, { useState } from 'react';

export default function EmployeeForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    segundo_nombre: '',
    apellido: '',
    segundo_apellido: '',
    tipo_documento:'',
    numero_documento: '',
    fecha_nacimiento: '',
    genero: '',
    fecha_contratacion: '',
    cargo: '',
    pais: '',
    ciudad: '',
    salario: '',
    email_corporativo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: '', segundo_nombre: '', apellido: '', segundo_apellido: '',   tipo_documento:'', numero_documento: '', fecha_nacimiento: '', genero: '',   fecha_contratacion: '', cargo: '', pais: '', ciudad: '', salario: '',  email_corporativo: '' });
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
        <label className="block mb-1">Segundo nombre</label>
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
        <input
          type="text"
          name="tipo_documento"
          value={formData.tipo_documento}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Numero de documento</label>
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
          type="text"
          name="fecha_nacimiento"
          value={formData.fecha_nacimiento}
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
        <label className="block mb-1">Fecha de contratación</label>
        <input
          type="text"
          name="fecha_contratacion"
          value={formData.fecha_contratacion}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Cargo a ejercer</label>
        <input
          type="text"
          name="cargo"
          value={formData.cargo}
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
        <label className="block mb-1">Salario</label>
        <input
          type="text"
          name="salario"
          value={formData.salario}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Email corporativo</label>
        <input
          type="text"
          name="email_corporativo"
          value={formData.email_corporativo}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Empleado
      </button>
    </form>
  );
}

