import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioContext';


export const ProtectedRoute = ({ children }) => {
  const { usuario } = useContext(UsuarioContext)
  
  const location = useLocation();
  
  if (!usuario) {
    // Redirige al login si no hay usuario autenticado, guardando la ruta intentada
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};