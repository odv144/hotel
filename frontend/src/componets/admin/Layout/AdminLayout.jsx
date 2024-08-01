import { Text, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const AdminLayout = () => {
  const isMobil = useBreakpointValue({base:false,sm:true,md:true,lg:true})
  return (
    <div>
      {/* Aquí puedes poner elementos comunes como un menú de navegación */}
      
      <Outlet />
    </div>
  );
};