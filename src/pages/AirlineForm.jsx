// Componente nieto de App e hijo de RenderForm

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAirlines } from "../context/AirlineContext";
import DataTable from "../components/design/DataTable";

export default function AirlineFormPage({}) {
  const { createAirline, loading, error, airlines } = useAirlines();
  const [activeTab, setActiveTab] = useState(""); // Estado de menu pestaña activa/inactiva

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const FormSubmit = async (data) => {
    try {
      await createAirline(data);
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
            Nombre Aerolinea
          </label>
          <input
            type="text"
            {...register("nombre", {
              minLength: {
                value: 5,
                message: "Deber tener minimo 5 caracteres",
              },
              required: {
                value: true,
                message: "El nombre de la aerolinea es obligatorio",
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
          <label htmlFor="nombre_legal" className="block mb-1">
            Nombre Legal
          </label>
          <input
            type="text"
            {...register("nombre_legal", {
              required: "El nombre legal de la aerolinea es obligatorio",
              maxLength: {
                value: 30,
                message: "El nombre legal no puede exceder los 30 caracteres",
              },
              minLength: {
                value: 5,
                message: "Deber tener minimo 5 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras y espacios",
              },
            })}
            className="w-full border rounded px-2 py-1"
          />
          {errors.nombre_legal && (
            <span className="text-red-500">{errors.nombre_legal.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="estado" className="block mb-1">
            Estado Aerolinea
          </label>
          <select
            {...register("estado", {
              required: "Debes seleccionar una opción",
            })}
            className="w-full border rounded px-2 py-1"
          >
            <option value="">Seleccione estado actual:</option>
            <option value="activa">Activa</option>
            <option value="suspendida">Suspendida</option>
            <option value="inactiva">Inactiva</option>
          </select>
          {errors.estado && (
            <span className="text-red-500">{errors.estado.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="pais_origen" className="block mb-1">
            País Origen
          </label>
          <input
            type="text"
            {...register("pais_origen", {
              required: {
                value: "true",
                message: "País es requerido",
              },
              maxLength: {
                value: 30,
                message: "El nombre del pais no puede exceder los 30 caracteres",
              },
              minLength: {
                value: 5,
                message: "Deber tener minimo 5 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras y espacios",
              },
            })}
            className="w-full border rounded px-2 py-1"
          />
          {errors.pais_origen && (
            <span className="text-red-500">{errors.pais_origen.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="numero_empleados" className="block mb-1">
            Número de empleados
          </label>
          <input
            type="number"
            {...register("numero_empleados", {
              required: {
                value: "true",
                message: "Ingrese un valor númerico",
              },
            })}
            className="w-full border rounded px-2 py-1"
          />
          {errors.numero_empleados && (
            <span className="text-red-500">
              {errors.numero_empleados.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="sede_principal" className="block mb-1">
            Sede Principal
          </label>
          <input
            type="text"
            {...register("sede_principal", {
              required: {
                value: "true",
                message: "Sede principal es obligatorio",
              },
              minLength: {
                value: 5,
                message: "Deber tener minimo 5 caracteres",
              },
              maxLength: {
                value: 30,
                message: "El nombre de la sede principal no puede exceder los 30 caracteres",
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo se permiten letras y espacios",
              },
            })}
            className="w-full border rounded px-2 py-1"
          />
          {errors.sede_principal && (
            <span className="text-red-500">
              {errors.sede_principal.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="telefono" className="block mb-1">
            Telefono
          </label>
          <input
            type="tel"
            {...register("telefono", {
              required: {
                value: true,
                message: "Télefono es obligatorio",
              },
              pattern: {
                value: /^[0-9+\-]+$/,
                message: "Ingrese solo numeros",
              },
            })}
            className="w-full border rounded px-2 py-1"
          />
          {errors.telefono && (
            <span className="text-red-500">{errors.telefono.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Correo Electronico
          </label>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Ingrese un correo valido",
              },
            })}
            className="w-full border rounded px-2 py-1"
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="cantidad_aviones" className="block mb-1">
            Cantidad de aviones
          </label>
          <input
            type="number"
            {...register("cantidad_aviones", {
              required: {
                value: true,
                message: "Ingrese la cantidad",
              },
            })}
            className="w-full border rounded px-2 py-1"
          />
          {errors.cantidad_aviones && (
            <span className="text-red-500">
              {errors.cantidad_aviones.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="hover:bg-cyan-800 bg-cyan-600  hover: text-white w-[100%] px-4 py-2 rounded"
        >
          {loading ? "Guardando..." : "Agregar Aerolínea"}
        </button>
      </form>
      <div className="mx-auto mt-10 sm:w-full">
        <DataTable data={airlines} />
      </div>
    </>
  );
}
