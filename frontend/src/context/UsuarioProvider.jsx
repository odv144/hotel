import { useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"


export const UsuarioProvider = ({children}) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  const login = (userData) => {
    setUsuario(userData);
    localStorage.setItem('usuario', JSON.stringify(userData));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuario');
  };


    return (
    <UsuarioContext.Provider value={{usuario,login, logout}}>
        {children}
    </UsuarioContext.Provider>
  )
}
