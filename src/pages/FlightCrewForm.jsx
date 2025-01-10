import React from 'react';
import { useForm } from 'react-hook-form';

export default function FlightCrewForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const FormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(FormSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Su rol de empleado</label>
        <input
          type="text"
          {...register("rol", {
            required: "El rol es obligatorio",
            minLength: {
              value: 3,
              message: "El rol debe tener al menos 3 caracteres"
            },
            maxLength: {
              value: 30,
              message: "El rol no puede exceder los 30 caracteres"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.rol && <span className="text-red-500">{errors.rol.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Disponibilidad</label>
        <select
          {...register("estado", {
            required: "Debes seleccionar una opción"
          })}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Disponibilidad del empleado</option>
          <option value="Vacaciones">Vacaciones</option>
          <option value="Suspendido">Suspendido</option>
        </select>
        {errors.estado && <span className="text-red-500">{errors.estado.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Horas de servicio</label>
        <input
          type="number"
          {...register("horas_servicio", {
            required: "Las horas de servicio son obligatorias",
            min: {
              value: 1,
              message: "Debe tener al menos 1 hora de servicio"
            },
            max: {
              value: 10000,
              message: "No puede exceder las 10000 horas de servicio"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.horas_servicio && <span className="text-red-500">{errors.horas_servicio.message}</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        En construcción...
      </button>
    </form>
  );
}

