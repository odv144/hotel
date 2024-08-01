import React, { useEffect, useState } from 'react';

import { Footer } from "../footer/Footer";
import { 
  Box, 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  NumberInput, 
  NumberInputField, 
  Checkbox,
  VStack, 
  Flex,
  Icon
} from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const Admin2 = () => {
  const { id } = useParams();
  const [csrfToken, setCsrfToken] = useState('');

  const [formData, setFormData] = useState({
    type: '',
    description: '',
    capacity: 0,
    beds: '',
    surface: 0,
    safe_deposit_box: false,
    air_conditioner: false,
    price: ''
  });

  useEffect(() => {
 
    const fetchRoomData = async () => {
      try {
        const response = await fetch(`https://hotel-oceano.onrender.com/api-room/roomtype/${id}/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };
  
    fetchRoomData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNumberInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  // useEffect(() => {
  //   const fetchCSRFToken = async () => {
  //     try {
  //       const response = await axios.get('https://hotel-oceano.onrender.com/get-csrf-token/');
  //       axios.defaults.headers.common['X-CSRFTOKEN'] = response.data.csrfToken;
  //     } catch (error) {
  //       console.error('Error al obtener el token CSRF:', error);
  //     }
  //   };
  
  //   fetchCSRFToken();
  // }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datosAEnviar = {
        ...formData,
        capacity: Number(formData.capacity),
        surface: Number(formData.surface),
        // price: Number(formData.price),
      };
      delete datosAEnviar.id;
  
      console.log("Estructura por enviar:", JSON.stringify(datosAEnviar, null, 2))

      const response = await axios.put(`https://hotel-oceano.onrender.com/api-room/roomtype/${id}/`,
        datosAEnviar,{
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
           
          }
        });
       
      alert("los datos se guardaron")  
      console.log('Data updated successfully:', response.data);
      // You might want to show a success message to the user here
    } catch (error) {
      console.error('Error updating data:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <>
     <Header />
     {/* Botón Volver */}
     
      <Box p={4} maxW="sm" mx="auto" borderWidth="1px" borderRadius="lg" bg="#FFDE9D73" >
      <Flex alignItems="center" width="24px" height="24px" cursor="pointer" m={2}>
          <Link to={"/admin/habitacion"}>
            <Icon as={ArrowBackIcon} w={8} h={8}  color="primary.600" />
          </Link>
        </Flex>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Tipo de Habitación</FormLabel>
              <Input
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                placeholder="Tipo de habitación"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descripción de la habitación"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Capacidad</FormLabel>
              <NumberInput
                min={0}
                max={32767}
                value={formData.capacity}
                onChange={(value) => handleNumberInputChange('capacity', value)}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Tipo de Camas</FormLabel>
              <Input
                name="beds"
                value={formData.beds}
                onChange={handleInputChange}
                placeholder="Ej: Queen"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Superficie (m²)</FormLabel>
              <NumberInput
                min={0}
                max={32767}
                value={formData.surface}
                onChange={(value) => handleNumberInputChange('surface', value)}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl>
              <Checkbox
                name="safe_deposit_box"
                isChecked={formData.safe_deposit_box}
                onChange={handleInputChange}
              >
                Caja de seguridad
              </Checkbox>
            </FormControl>

            <FormControl>
              <Checkbox
                name="air_conditioner"
                isChecked={formData.air_conditioner}
                onChange={handleInputChange}
              >
                Aire acondicionado
              </Checkbox>
            </FormControl>

            <FormControl>
              <FormLabel>Precio</FormLabel>
              <Input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Precio por noche"
              />
            </FormControl>

            <Button type="submit" variant={'filled'}>Guardar</Button>
          </VStack>
        </form>
      </Box>
      <Footer />
    </>
  );
};
// import React, { useEffect, useState } from 'react';
// import { Header } from "../header/Header";
// import { Footer } from "../footer/Footer";
// import { 
//   Box, 
//   Button, 
//   FormControl, 
//   FormLabel, 
//   Input, 
//   NumberInput, 
//   NumberInputField, 
//   VStack 
// } from '@chakra-ui/react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export const Admin2 = () => {
//   const { id } = useParams();
//   const [datos, setDatos] = useState({});
//   const [imagen, setImagen] = useState('');
//   const [precio, setPrecio] = useState('');
//   const [capacidad, setCapacidad] = useState('');
//   const [tipo, setTipo] = useState('');

//   useEffect(() => {
//     const fetchRoomNumber = async () => {
//       try {
//         const response = await fetch(`https://hotel-oceano.onrender.com/api-room/roomtype/${id}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setDatos(data);
//         setPrecio(data.price || '');
//         setCapacidad(data.capacity || '');
//         setTipo(data.type || '');
//       } catch (error) {
//         console.error('Error fetching room number:', error);
//       }
//     };
  
//     fetchRoomNumber();
//   }, [id]);

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`https://hotel-oceano.onrender.com/api-room/roomtype/${id}`, {
        
//         price: parseFloat(precio),
//         capacity: parseInt(capacidad),
//         type: tipo,
//       });
//       console.log("Datos enviados:", JSON.stringify(response.data, null, 2));
//       console.log('Data updated successfully:', response.data);
//       // You might want to show a success message to the user here
//     } catch (error) {
//       console.error('Error updating data:', error);
//       // You might want to show an error message to the user here
//     }
//   }

//   return (
//     <>
//       <Header />
//       <Box p={4} maxW="sm" mx="auto" borderWidth="1px" borderRadius="lg" bg="#FFDE9D73" >
//         <VStack spacing={4}>
//           <FormControl id="titulo">
//             <FormLabel>TIPO DE HABITACION</FormLabel>
//           </FormControl>
          
//           <FormControl id="imagen">
//             <FormLabel>Cargar Imagen</FormLabel>
//             <Input 
//               type="text" 
//               placeholder="URL de la imagen"
//               value={imagen}
//               onChange={(e) => setImagen(e.target.value)}
//               bg="#FFFFFF"
//               border="1px solid varios.200"
//               fontSize="14px"
//               width="365px"
//               height="40px"
//               padding="10px 16px"
//               borderRadius="4px 0px 0px 0px"
//               borderTop="1px solid #E2E2E2"
//               borderRight="0"
//               borderBottom="0"
//               borderLeft="0"
//             />
//           </FormControl>

//           <FormControl id="id">
//             <FormLabel fontFamily="Inter" fontSize="14px">ID:</FormLabel>
//             <Input
//               placeholder="ROOM ID"
//               value={id}
//               readOnly
//               bg="#FFFFFF"
//               border="1px solid varios.200"
//               fontSize="14px"
//               width="365px"
//               height="40px"
//               padding="10px 16px"
//               borderRadius="4px 0px 0px 0px"
//               borderTop="1px solid #E2E2E2"
//               borderRight="0"
//               borderBottom="0"
//               borderLeft="0"
//             />
//           </FormControl>

//           <FormControl id="precio">
//             <FormLabel fontFamily="Inter" fontSize="14px">Precio:</FormLabel>
//             <NumberInput min={0} precision={2} value={precio} onChange={(valueString) => setPrecio(valueString)}>
//               <NumberInputField 
//                 placeholder="Establece un precio" 
//                 bg="#FFFFFF"
//                 border="1px solid #E2E2E2"
//                 fontSize="14px"
//                 width="365px"
//                 height="40px"
//                 padding="10px 16px"
//                 borderRadius="4px 0px 0px 0px"
//                 borderTop="1px solid #E2E2E2"
//                 borderRight="0"
//                 borderBottom="0"
//                 borderLeft="0"
//               />
//             </NumberInput>
//           </FormControl>

//           <Box width="100%">
//             <FormLabel fontSize="24px">Habitaciones</FormLabel>
//           </Box>

//           <FormControl id="capacidad">
//             <FormLabel fontFamily="Inter" fontSize="14px">Capacidad:</FormLabel>
//             <NumberInput min={0} value={capacidad} onChange={(valueString) => setCapacidad(valueString)}>
//               <NumberInputField 
//                 placeholder="1" 
//                 bg="#FFFFFF"
//                 border="1px solid #E2E2E2"
//                 fontSize="14px"
//                 width="365px"
//                 height="40px"
//                 padding="10px 16px"
//                 borderRadius="4px 0px 0px 0px"
//                 borderTop="1px solid #E2E2E2"
//                 borderRight="0"
//                 borderBottom="0"
//                 borderLeft="0"
//               />
//             </NumberInput>
//           </FormControl>

//           <FormControl id="type">
//             <FormLabel fontFamily="Inter" fontSize="14px">Tipo:</FormLabel>
//             <Input 
//               value={tipo}
//               onChange={(e) => setTipo(e.target.value)}
//               bg="#FFFFFF"
//               border="1px solid #E2E2E2"
//               fontSize="14px"
//               width="365px"
//               height="40px"
//               padding="10px 16px"
//               borderRadius="4px 0px 0px 0px"
//               borderTop="1px solid #E2E2E2"
//               borderRight="0"
//               borderBottom="0"
//               borderLeft="0"
//               placeholder="3" 
//             />
//           </FormControl>

//           <Button variant={'filled'} type="submit" onClick={handleClick}>Guardar</Button>
//         </VStack>
//       </Box>
//       <Footer />
//     </>
//   );
// };