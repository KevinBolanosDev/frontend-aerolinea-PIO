import React from 'react';
import { useForm } from 'react-hook-form';

export default function EmployeeForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Error en el formulario:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Nombre</label>
        <input
          type="text"
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.nombre && <span className="text-red-500">{errors.nombre.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Segundo nombre</label>
        <input
          type="text"
          {...register("segundo_nombre", {
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.segundo_nombre && <span className="text-red-500">{errors.segundo_nombre.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Apellido</label>
        <input
          type="text"
          {...register("apellido", {
            required: "El apellido es obligatorio",
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.apellido && <span className="text-red-500">{errors.apellido.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Segundo Apellido</label>
        <input
          type="text"
          {...register("segundo_apellido", {
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.segundo_apellido && <span className="text-red-500">{errors.segundo_apellido.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Tipo de documento</label>
        <input
          type="text"
          {...register("tipo_documento", {
            required: "El tipo de documento es obligatorio"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.tipo_documento && <span className="text-red-500">{errors.tipo_documento.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Numero de documento</label>
        <input
          type="text"
          {...register("numero_documento", {
            required: "El número de documento es obligatorio",
            pattern: { value: /^[0-9]+$/, message: "Solo se permiten números" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.numero_documento && <span className="text-red-500">{errors.numero_documento.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Fecha de nacimiento</label>
        <input
          type="date"
          {...register("fecha_nacimiento", {
            required: "La fecha de nacimiento es obligatoria",
            validate: (value) => {
              const fechaNacimiento = new Date(value);
              const fechaActual = new Date();
              const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
              return edad >= 18 || "Debe ser mayor de edad";
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.fecha_nacimiento && <span className="text-red-500">{errors.fecha_nacimiento.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Genero</label>
        <input
          type="text"
          {...register("genero", {
            required: "El género es obligatorio"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.genero && <span className="text-red-500">{errors.genero.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Fecha de contratación</label>
        <input
          type="date"
          {...register("fecha_contratacion", {
            required: "La fecha de contratación es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.fecha_contratacion && <span className="text-red-500">{errors.fecha_contratacion.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Cargo a ejercer</label>
        <input
          type="text"
          {...register("cargo", {
            required: "El cargo es obligatorio",
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.cargo && <span className="text-red-500">{errors.cargo.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Pais</label>
        <input
          type="text"
          {...register("pais", {
            required: "El país es obligatorio",
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.pais && <span className="text-red-500">{errors.pais.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Ciudad</label>
        <input
          type="text"
          {...register("ciudad", {
            required: "La ciudad es obligatoria",
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.ciudad && <span className="text-red-500">{errors.ciudad.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Salario</label>
        <input
          type="number"
          {...register("salario", {
            required: "El salario es obligatorio",
            min: { value: 0, message: "El salario debe ser un número positivo" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.salario && <span className="text-red-500">{errors.salario.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Email corporativo</label>
        <input
          type="email"
          {...register("email_corporativo", {
            required: "El email corporativo es obligatorio",
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Ingrese un correo válido" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.email_corporativo && <span className="text-red-500">{errors.email_corporativo.message}</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Empleado
      </button>
    </form>
  );
}

