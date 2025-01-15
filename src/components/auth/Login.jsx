import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm();

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tables");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signin(values);
  });

  
  return (
    <div className="flex items-center justify-center">
      <div className='w-full h-screen pt-10 xl:pt-14 bg-slate-900'>
    <h2 className='text-3xl w-80 sm:w-[40rem] xl:w-full sm:text-4xl text-center mx-auto'>Gestión de Bases de Datos Aerolinea</h2>
      <div className="pt-10 mx-auto w-full sm:w-[30rem] rounded-md">
        {/* Manejo de errores del backend */}
        {Array.isArray(loginErrors) && loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))}

        <h1 className="text-4xl text-center font-bold my-4">Inicia sesión</h1>

        <form className="w-[20rem] xl:w-[25rem] mx-auto" onSubmit={onSubmit}>
          <input
            type="email"
            {...register("email", { 
              required: "El correo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido"
              }
            })}
            className="w-full text-xl bg-slate-800 text-neutral-200 px-4 py-4 rounded-md my-2"
            placeholder="Correo electrónico"
          />
          {formErrors.email && (
            <span className="text-red-500">{formErrors.email.message}</span>
          )}

          <input
            type="password"
            {...register("password", { 
              required: "La contraseña es requerida" 
            })}
            className="w-full text-xl bg-slate-800 text-neutral-200 px-4 py-4 rounded-md my-2"
            placeholder="Contraseña"
          />
          {formErrors.password && (
            <span className="text-red-500">{formErrors.password.message}</span>
          )}

          <div className="my-2 text-end">
            <button
              className="bg-teal-950 text-xl w-full hover:bg-emerald-900 text-neutral-300 font-bold py-4 px-4 rounded"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>

          <p className="flex text-[1.1rem] xl:text-2xl justify-between mt-6">
            ¿No tienes una cuenta?
            <Link to="/register" className="text-sky-500 hover:text-sky-400">
              Registrate
            </Link>
          </p>
        </form>
      </div>
  </div>
    </div>
  );
}

