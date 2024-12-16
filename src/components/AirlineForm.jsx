// import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export default function AirlineForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const handleFormSubmit = (data) => {
    if (onSubmit) {
      onSubmit(data);
    } else {
      console.log("Datos del formulario: ", data);
    }
    reset(); // Reinicia el formulario
  };

        // Manejo de estados la información

  /*   const [formData, setFormData] = useState({
    nombre: '',
    nombre_legal: '',
    estado: '',
    pais_origen: '',
    numero_empleados: '',
    sede_principal: '',
    telefono: '',
    email: '',
    cantidad_aviones: ''
  }); */

  /* const handleChange = (formData) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; */

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ nombre: '', nombre_legal: '', estado: '', pais_origen: '', numero_empleados: '', sede_principal: '', telefono: '', email: '',      cantidad_aviones: '' });
  }; */

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="block mb-1">
          Nombre Aerolinea
        </label>
        <input
          type="text"
          {...register("nombre", {
            minLength: {
              value: 5,
              message:"Deber tener minimo 5 caracteres"
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
              message: "Ingrese un valor",
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
        <label htmlFor="sede_principal" className="block mb-1">Sede Principal</label>
        <input
          type="text"
          {...register("sede_principal", {
            required: {
              value: "true",
              message: "Sede principal es obligatorio"
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
        <label htmlFor="telefono" className="block mb-1">Telefono</label>
        <input
          type="tel"
          {...register("telefono", {
            required: {
              value: true,
              message: "Télefono es obligatorio"
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "Ingrese solo numeros"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.telefono && (
          <span className="text-red-500">
            {errors.telefono.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="correo_elecotronico" className="block mb-1">Correo Electronico</label>
        <input
          type="email"
          {...register("correo_electronico", {
            required: {
              value: true,
              message: "Correo es requerido"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.correo_electronico && (
          <span className="text-red-500">
            {errors.correo_electronico.message}
          </span>
        )}
      </div>
      {/*       
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
      </div> */
      }
      <button
        type="submit"
        className="hover:bg-cyan-800 bg-cyan-600  hover: text-white w-[100%] px-4 py-2 rounded"
      >
        Agregar Aerolínea
      </button>

      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
}
