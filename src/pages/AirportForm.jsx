import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAirport } from "../context/AirportContext";
import DataTable from "../components/design/DataTable";

export default function AirportForm({}) {
  const { createAirport, loading, error, airport } = useAirport();
  const [activeTab, setActiveTab] = useState(""); // Estado de menu pestaña activa/inactiva

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const FormSubmit = async (data) => {
    try {
      await createAirport(data);
    } catch (error) {
      console.error("Error en el formulario:", error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(FormSubmit)} className="space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <div>
        <label htmlFor="nombre" className="block mb-1">
          Nombre del Aeropuerto
        </label>
        <input
          type="text"
          {...register("nombre", {
            minLength: {
              value: 5,
              message: "Debe tener minimo 5 caracteres",
            },
            required: {
              value: true,
              message: "El nombre del aeropuerto es obligatorio",
            },
            maxLength: {
              value: 30,
              message: "El nombre no puede exceder los 30 caracteres",
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
              message: "Solo se permiten letras y espacios",
            },
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.nombre && (
          <span className="text-red-500">{errors.nombre.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="ciudad" className="block mb-1">
          Ciudad
        </label>
        <input
          type="text"
          {...register("ciudad", {
            required: {
              value: true,
              message: "El nombre de la ciudad es requerido",
            }, 
            maxLength: {
              value: 30,
              message:
                "El nombre de la ciudad no puede exceder los 30 caracteres",
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
              message: "Solo se permiten letras y espacios",
            },
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.ciudad && (
          <span className="text-red-500">{errors.ciudad.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="pais" className="block mb-1">
          Pais
        </label>
        <input
          type="text"
          {...register("pais", {
            required: {
              value: true,
              message: "El nombre del pais es requerido",
            },
            maxLength: {
              value: 30,
              message: "El nombre del pais no puede exceder los 30 caracteres",
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
              message: "Solo se permiten letras y espacios",
            },
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.pais && (
          <span className="text-red-500">{errors.pais.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="codigo_iata" className="block mb-1">
          Codigo IATA
        </label>
        <input
          type="text"
          {...register("codigo_iata", {
            required: {
              value: true,
              message: "El codigo IATA es requerido",
            },
            maxLength: {
              value: 3,
              message: "El codigo IATA no puede exceder los 3 caracteres",
            },
            pattern: {
              value: /^[A-Z]{3}$/,
              message: "Solo se permiten letras mayusculas y 3 caracteres",
            },
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.codigo_iata && (
          <span className="text-red-500">{errors.codigo_iata.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="estado" className="block mb-1">
          Estado
        </label>
        <input
          type="text"
          {...register("estado", {
            required: {
              value: true,
              message: "El estado es requerido",
            },
            maxLength: {
              value: 30,
              message: "El estado no puede exceder los 30 caracteres",
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
              message: "Solo se permiten letras y espacios",
            },
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.estado && (
          <span className="text-red-500">{errors.estado.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Guardando..." : "Agregar Aeropeurto"}
      </button>
      <h2 className="text-2xl font-bold mb-2">
        Datos de {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h2>
    </form>
      <div>
      <DataTable data={airport} />
      </div>
    </>
  );
}
