import { useEffect, useState } from "react";
import { UsuarioContext } from "./UsuarioContext";
import Cookies from "js-cookie";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import { useNavigate } from "react-router-dom";

export const UsuarioProvider = ({ children }) => {
  //  const URL_BASE = 'https://hotel-oceano.onrender.com' //SERVIDOR DE JAVIER
  // const URL_BASE = "https://hotel-ey89.onrender.com"; //SERIVIDOR OMAR
 
  const [usuario, setUsuario] = useState({});
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
       'accept': "*/*",

    },
  });
  
  
  const userSave=()=>{
     const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }
  // useEffect(() => {
  //   userSave();
  // }, []);

  // Configuración inicial de Axios
  const headers = {
    "Content-Type": "application/json",
   'accept': "*/*",
  };
  
  const login = async (userData) => {
    if(!Cookies.get('sessionid'))
    {
      try {
        const response = await axiosInstance.post(
        "/api-auth/login-view/",
        {
          username: userData.usuario,
          password: userData.password,
        },
        {
          headers: headers,
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(document.cookie);
      console.log(Cookies.get('csrftoken'));
      const data = {
        "username": userData.usuario,
        "password": userData.password,
        "csrftoken": Cookies.get('csrftoken'),
        "sessionid": Cookies.get('sessionid'),
        
      }
      setUsuario(data);
      console.log(data);
      localStorage.setItem("usuario", JSON.stringify(data));
      // window.location.href = '/admin/home';
    } catch (error) {
      alert("Credenciales invalidas pero no aca ");
    }
  }
  };

  const logout = async () => {
    console.log(import.meta.env.VITE_API_URL);

    try {
      console.log(document.cookie);

      const cookieValue = Cookies.get("csrftoken", { path: "/" });
      console.log("cookieValue" + cookieValue);
      const response = await axiosInstance.post(
        "/api-auth/logout-view/",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": cookieValue,

            // "sessionid":"",
          },

          withCredentials: true,
        }
      );
      
    } catch (error) {
      localStorage.removeItem("usuario");
      console.log("algo paso"+error);
    }
    setUsuario(false);

  };

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        login,
        logout,
        userSave,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
