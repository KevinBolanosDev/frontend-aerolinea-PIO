import React from 'react';
import { useForm } from 'react-hook-form';

export default function FeeForm({ onSubmit }) {
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
        <label className="block mb-1">Fecha de inicio</label>
        <input
          type="date"
          {...register("fecha_inicio", {
            required: "La fecha de inicio es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.fecha_inicio && <span className="text-red-500">{errors.fecha_inicio.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Fecha de fin</label>
        <input
          type="date"
          {...register("fecha_fin", {
            required: "La fecha de fin es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.fecha_fin && <span className="text-red-500">{errors.fecha_fin.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Clase</label>
        <select
          {...register("clase", {
            required: "La clase es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Seleccione una clase</option>
          <option value="economy">Económica</option>
          <option value="business">Negocios</option>
          <option value="first">Primera</option>
        </select>
        {errors.clase && <span className="text-red-500">{errors.clase.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Precio</label>
        <input
          type="number"
          {...register("precio", {
            required: "El precio es obligatorio",
            min: { value: 0, message: "El precio debe ser un número positivo" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.precio && <span className="text-red-500">{errors.precio.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Moneda</label>
        <input
          type="text"
          {...register("moneda", {
            required: "La moneda es obligatoria",
            minLength: { value: 2, message: "Debe tener al menos 2 caracteres" }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.moneda && <span className="text-red-500">{errors.moneda.message}</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Total Tarifa
      </button>
    </form>
  );
}

