import { createContext, useState, useContext, useEffect } from "react";
import { authApi } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

//Nos da un contexto, hace uso del contexto y si no existe el contexto, lanza un error
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Singup es una función que recibe un usuario y hace una petición al servidor
  const singup = async (userData) => {
    try {
      const dataWithRole = {
        ...userData,
        role: "user",
      };
      const data = await authApi.register(dataWithRole);
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  const signin = async (userData) => {
    try {
      const data = await authApi.login(userData);
      console.log(data); // para verificar errores
      setIsAuthenticated(true);
      setUser(data.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  const loadProfile = async () => {
    try {
      const { data } = await authApi.profile();
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error loading profile:", error);
      Cookies.remove("token");
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // Verificamos si el usuario esta logueado
  useEffect(() => {
    async function checkLogin() {
      //función asincrónica que  maneja la lógica de verificación de usuario
      const cookies = Cookies.get();

      if (!cookies.token) {
        console.log(cookies.token);
        setIsAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }

      try {
        await loadProfile();
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null); // Se establece el estado user en null, ya que la información del usuario no está disponible debido al error
        setLoading(false);
      }
    }

    checkLogin();
  }, []); // Es un array vacío ([]), lo que significa que este efecto se ejecutará solo una vez después de que el componente ha sido montado.

  return (
    <AuthContext.Provider
      value={{
        singup,
        signin,
        logout,
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
