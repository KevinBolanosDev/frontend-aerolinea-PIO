import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReservationForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const FormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(FormSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Numero de Tickete</label>
        <input
          type="text"
          {...register("numero_tickete", {
            required: "El número de tickete es obligatorio",
            minLength: {
              value: 5,
              message: "Debe tener mínimo 5 caracteres"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.numero_tickete && <span className="text-red-500">{errors.numero_tickete.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Número de Asiento</label>
        <input
          type="text"
          {...register("numero_asiento", {
            required: "El número de asiento es obligatorio",
            minLength: {
              value: 1,
              message: "Debe tener mínimo 1 carácter"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.numero_asiento && <span className="text-red-500">{errors.numero_asiento.message}</span>}
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
          <option value="economica">Económica</option>
          <option value="ejecutiva">Ejecutiva</option>
          <option value="primera clase">Primera Clase</option>
        </select>
        {errors.clase && <span className="text-red-500">{errors.clase.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Estado actual</label>
        <select
          {...register("estado", {
            required: "El estado es obligatorio"
          })}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">Seleccione un estado</option>
          <option value="emitido">Emitido</option>
          <option value="usado">Usado</option>
          <option value="cancelado">Cancelado</option>
          <option value="expirado">Expirado</option>
        </select>
        {errors.estado && <span className="text-red-500">{errors.estado.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Fecha de emisión</label>
        <input
          type="date"
          {...register("fecha_emision", {
            required: "La fecha de emisión es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.fecha_emision && <span className="text-red-500">{errors.fecha_emision.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Fecha límite</label>
        <input
          type="date"
          {...register("fecha_limite", {
            required: "La fecha límite es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.fecha_limite && <span className="text-red-500">{errors.fecha_limite.message}</span>}
      </div>
      <div>
        <label className="block mb-1">Precio total</label>
        <input
          type="number"
          {...register("precio", {
            required: "El precio es obligatorio",
            min: {
              value: 0,
              message: "El precio debe ser mayor o igual a 0"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.precio && <span className="text-red-500">{errors.precio.message}</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar Reserva
      </button>
    </form>
  );
}

