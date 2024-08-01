import { Box, Button, Center, Input, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Header = () => {
  const bgColor = useColorModeValue('light.bg','dark.bg');
  const [datos, setDatos] = useState([])
  const fetchDatos = async () => {
    try {
      const response = await fetch(
        "https://api.sheetapi.rest/api/v1/sheet/PY70Ql8JN4Re0Q2QUdte2"
      );
      const data = await response.json();
      setDatos(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchPostDatos = async () => {
    try {
      const data = {
        id_content: "32",
        type: "TV-Show",
        title_content: "Mi nuevo titulo",
        release_year: 2024,
        cast: 'Kofi Ghanaba',
        director: 'omar',
        country: 'Argentina',
        rating: 'PG-13',
        duration: '90 min',
        listed_id: 'Documentation',
        runtime: 90,
      };
  
      const response = await fetch('https://api.sheetapi.rest/api/v1/sheet/PY70Ql8JN4Re0Q2QUdte2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log('Nuevo registro creado correctamente');
      } else {
        console.error('Error al crear el nuevo registro');
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    //fetchPostDatos()
    //fetchDatos()
  },[])

 
  
  return (
    <Center>
     
      <Box bg={bgColor}>
        <p >Info de Sheet </p>
        <ol >
        <Box color="primary.100">
        {datos.map(dato=><li key={dato.id_content} > {dato.type}--{dato.title_content}</li>)}
        </Box>
        </ol>

      </Box>
    <Button width='350px'>Estilo base</Button>
    <Button >Mi boton 1</Button>
    
    <Button size="xl" variant={'solid'} >Mi boton 1</Button>
    <Input />
    <Input variant={'nuevo'} />
    <Box bg={bgColor}>Caja de prueba</Box>
    </Center>
  );
};
