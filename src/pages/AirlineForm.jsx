// Componente nieto de App e hijo de RenderForm

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAirlines } from "../context/AirlineContext";
import DataTable from "../components/design/DataTable";

export default function AirlineFormPage({}) {
  const {
    createAirline,
    deleteAirline,
    updateAirline,
    loading,
    error,
    airlines: initialAirlines,
    searchAirlines,
  } = useAirlines();
  const [airlines, setAirlines] = useState(initialAirlines); // Estado local para controlar los datos
  const [editingAirline, setEditingAirline] = useState(null); // Estado para editar
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar resultados de búsqueda

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm(); // manejo de error react-hook-forms

  const FormSubmit = async (data) => {
    try {
      if (editingAirline) {
        // Si editamos, se actualiza
        const response = await updateAirline(editingAirline.id_aerolinea, data);
        const update = response.data;
        setAirlines((prev) =>
          prev.map((airline) =>
            airline.id_aerolinea === editingAirline.id_aerolinea
              ? update
              : airline
          )
        );
        setEditingAirline(null);
      } else {
        // pasamos a crear nuevo registro
        const response = await createAirline(data);
        const newAirline = response.data;
        setAirlines((prev) => [...prev, newAirline]);
      }
      reset(); // limpiamos formulario
    } catch (error) {
      console.error("Error en el formulario:", error);
    }
  };

  const handleDelete = async (id) => {
    console.log("ID a eliminar:", id); // Para verificar específicamente el ID

    try {
      await deleteAirline(id); // Elimina del servidor
      setAirlines((prev) => prev.filter((item) => item.id_aerolinea !== id)); // Elimina localmente
    } catch (error) {
      console.error("Error al eliminar la aerolínea:", error);
    }
  };

  const handleEdit = (item) => {
    setEditingAirline(item);
    // establecemos lo valores del form
    Object.keys(item).forEach((key) => {
      if (key in item) {
        setValue(key, item[key]);
      }
    });
  };

  // Función para manejar la búsqueda
  const handleSearch = (term) => {
    const results = searchAirlines(term); // Llama a la función del contexto
    setSearchResults(results); // Actualiza el estado con los resultados
  };

  // Filtrar las aerolíneas según el término de búsqueda
  const filteredAirlines = searchTerm ? searchResults : airlines; // Usa resultados de búsqueda si hay término

  return (
    <>
      <form onSubmit={handleSubmit(FormSubmit)} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 text-[1.1rem] font-medium text-gray-400">
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
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s.]+$/,
                  message: "Solo se permiten letras, espacios y puntos",
                },
              })}
              className="w-full border px-2 py-1"
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
                  value: 50,
                  message: "El nombre legal no puede exceder los 30 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "Deber tener minimo 5 caracteres",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s.]+$/,
                  message: "Solo se permiten letras y espacios",
                },
              })}
              className="w-full border px-2 py-1"
            />
            {errors.nombre_legal && (
              <span className="text-red-500">
                {errors.nombre_legal.message}
              </span>
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
              className="w-full border  px-2 py-1"
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
                  message:
                    "El nombre del pais no puede exceder los 30 caracteres",
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
              className="w-full border  px-2 py-1"
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
              className="w-full border  px-2 py-1"
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
                  message:
                    "El nombre de la sede principal no puede exceder los 30 caracteres",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message: "Solo se permiten letras y espacios",
                },
              })}
              className="w-full border  px-2 py-1"
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
                  value: /^[0-9+\- ]+$/,
                  message: "Ingrese solo numeros",
                },
              })}
              className="w-full border  px-2 py-1"
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
              className="w-full border  px-2 py-1"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
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
              className="w-full border  px-2 py-1"
            />
            {errors.cantidad_aviones && (
              <span className="text-red-500">
                {errors.cantidad_aviones.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="hover:bg-cyan-800 bg-cyan-600 hover: text-white w-[30rem] col-span-3 mx-auto px-4 py-2 rounded-md"
          >
            {loading
              ? "Guardando..."
              : editingAirline
              ? "Actualizar Aerolínea"
              : "Agregar Aerolínea"}
          </button>
        </div>
      </form>

      {/* Campo de búsqueda */}
      <div className="mb-4 flex flex-col gap-4 items-center">
        <input
          type="text"
          placeholder="Buscar aerolínea..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
          className="border text-2xl mt-6 px-2 py-2 w-96"
        />
        <button
          type="button"
          onClick={() => handleSearch(searchTerm)} // Ejecuta la búsqueda al hacer clic
          className="ml-2 bg-cyan-600 w-96 text-white px-4 py-2 text-2xl rounded-md hover:bg-cyan-800"
        >
          Buscar
        </button>
      </div>

      <div className="mx-auto mt-10 sm:w-full">
        <DataTable
          data={filteredAirlines} // Usa los resultados filtrados
          idField={"id_aerolinea"}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </>
  );
}
