import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();
  // console.log(loading, isAuthenticated);

  if (loading) return <h1>Cargando...</h1>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />; //Si la carga ha terminado y el usuario no está autenticado, se redirige a la página de inicio de sesión mediante el componente Navigate

  return <Outlet />;
}

export default ProtectedRoute;

// creamos este componente para proteger las rutas de la app, para que solo puedan ser accedidas por usuarios logueados

// Outlet: nos da la funcion de renderizar las rutas hijas de este componente, en este caso las rutas hijas son las rutas privadas
