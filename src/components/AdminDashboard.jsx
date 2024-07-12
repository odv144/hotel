import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <Box p={5}>
      <Heading>Panel de Administración</Heading>
      <Button mt={6} colorScheme="teal" onClick={handleLogout}>
        Cerrar Sesión
      </Button>
      {/* Agregar aquí componentes para gestionar reservas, habitaciones y servicios */}
    </Box>
  );
};

export default AdminDashboard;
