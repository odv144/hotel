import { Button, Text, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

export const AdminLayout = () => {
    const isMobil = useBreakpointValue({base:false,sm:true,md:true,lg:true})
  return (
    <div>
      {/* Aquí puedes poner elementos comunes como un menú de navegación */}
      <Header imgUrl={{base:'/img/logo2linea.svg',sm:'/img/logo1linea.svg'}} />
      <Outlet>
     
      </Outlet>
    </div>
  );
};