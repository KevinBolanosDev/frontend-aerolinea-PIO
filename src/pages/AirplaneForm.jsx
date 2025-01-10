import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAirplanes } from '../context/AirplaneContext';
import DataTable from '../components/design/DataTable';

export default function AirplaneFormPage({}) {
  const { createAirplane, loading, error, airplanes } = useAirplanes();
    const [activeTab, setActiveTab] = useState(""); // Estado de menu pestaña activa/inactiva
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const FormSubmit = async (data) => {
      try {
        await createAirplane(data);
      } catch (error) {
        console.error("Error en el formulario:", error);
      }
    };

  return (
    <>
    <form onSubmit={handleSubmit(FormSubmit)} className="space-y-4">
    {error && <div className="text-red-500">{error}</div>}
      <div>
        <label htmlFor='modelo' className="block mb-1">Modelo</label>
        <input
          type="text"
          {...register("modelo", {
            required: "El modelo es obligatorio",
            minLength: {
              value: 3,
              message: "Debe tener mínimo 3 caracteres"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.modelo && <span className="text-red-500">{errors.modelo.message}</span>}
      </div>
      <div>
        <label htmlFor='capacidad_pasajeros' className="block mb-1">Capacidad de pasajeros</label>
        <input
          type="number"
          {...register("capacidad_pasajeros", {
            required: "La capacidad de pasajeros es obligatoria",
            min: {
              value: 1,
              message: "Debe ser al menos 1"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.capacidad_pasajeros && <span className="text-red-500">{errors.capacidad_pasajeros.message}</span>}
      </div>
      <div>
        <label htmlFor='capacidad_carga_kg' className="block mb-1">Capacidad de carga en kg</label>
        <input
          type="number"
          {...register("capacidad_carga_kg", {
            required: "La capacidad de carga es obligatoria",
            min: {
              value: 1,
              message: "Debe ser al menos 1 kg"
            }
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.capacidad_carga_kg && <span className="text-red-500">{errors.capacidad_carga_kg.message}</span>}
      </div>
      <div>
        <label htmlFor='fecha_fabricacion' className="block mb-1">Fecha de fabricación</label>
        <input
          type="date"
          {...register("fecha_fabricacion", {
            required: "La fecha de fabricación es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.fecha_fabricacion && <span className="text-red-500">{errors.fecha_fabricacion.message}</span>}
      </div>
      <div>
        <label htmlFor='estado' className="block mb-1">Estado</label>
        <input
          type="text"
          {...register("estado", {
            required: "El estado es obligatorio"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.estado && <span className="text-red-500">{errors.estado.message}</span>}
      </div>
      <div>
        <label htmlFor='ultimo_mantenimiento' className="block mb-1">Último mantenimiento</label>
        <input
          type="date"
          {...register("ultimo_mantenimiento", {
            required: "La fecha del último mantenimiento es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.ultimo_mantenimiento && <span className="text-red-500">{errors.ultimo_mantenimiento.message}</span>}
      </div>
      <div>
        <label htmlFor='proximo_mantenimiento' className="block mb-1">Próximo mantenimiento</label>
        <input
          type="date"
          {...register("proximo_mantenimiento", {
            required: "La fecha del próximo mantenimiento es obligatoria"
          })}
          className="w-full border rounded px-2 py-1"
        />
        {errors.proximo_mantenimiento && <span className="text-red-500">{errors.proximo_mantenimiento.message}</span>}
      </div>
      <button
          type="submit"
          className="hover:bg-cyan-800 bg-cyan-600  hover: text-white w-[100%] px-4 py-2 rounded"
        >
          {loading ? "Guardando..." : "Agregar Aerolínea"}
        </button>
    </form>
    <h2 className="text-2xl font-bold mb-2">
        Datos de {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h2>
    <div className='mx-auto mt-10 sm:w-full'>
          <DataTable data={airplanes} />
    </div>
    </>
  );
}

