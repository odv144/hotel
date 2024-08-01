import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  VStack,
  Text,
  Img,
  useBreakpointValue,
  Icon,
} from "@chakra-ui/react";

import { FooterAdmin } from "../footer/FooterAdmin";

import { HabitacionCard } from "./HabitacionCard";
import { HabitacionCardAdd } from "./HabitacionCardAdd";
import { HabitacionContext } from "../../context/HabitacionContext";
import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Footer } from "../footer/Footer";
import Header from "./Header";
import { FaPlusCircle } from "react-icons/fa";
import { ArrowBackIcon } from "@chakra-ui/icons";
export const Admin1 = () => {
  const { rooms, imgRooms, obtenerDatos } = useContext(HabitacionContext);
  const location = useLocation();
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });
  const isMobile = useBreakpointValue({ base: true, sm: false, md: false });
  
  useEffect(()=>{
    obtenerDatos()
  },[location])
  return (
    <>
      {/* Contenido Principal */}
      <Header imgUrl={imgUrl} />
      <Box bg="primary.500" p={4} mb={4}>
        {/* Título de Habitaciones */}
        <Heading
          as="h2"
          size="lg"
          mb={4}
          color="var(--secondary-500, #FFDE9D)"
          fontSize="28px"
        >
          Habitaciones
        </Heading>
        {/* Botón Volver */}
        <Flex alignItems="center" width="24px" height="24px" cursor="pointer">
          <Link to={"/admin/home"}>
            <Icon as={ArrowBackIcon} w={8} h={8}  color="secondary.500" />
          </Link>
        </Flex>
        {/* División para las 2 imágenes */}
        <VStack spacing={4} mb={4} flexDirection={"row"} justify={"center"}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica.png" alt="Imagen 1" />
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <img src="/img/CardGrafica1.png" alt="Imagen 2" />
          </Box>
        </VStack>

        <Center
          bg="varios.200"
          flexDirection={["column", "column", "row"]}
          display={"flex"}
          flexWrap={"wrap"}
        >
          {/* División con imágenes y botones de editar */}
          {rooms.map((hab) => {
            const imagenObj = imgRooms.find(
              (img) => img.room_type_id === hab.id
            );
            const imagUrl = imagenObj ? imagenObj.image : "";
            return <HabitacionCard key={hab.id} hab={hab} imagen={imagUrl} />;
          })}
          {!isMobile ? (
            <HabitacionCardAdd />
          ) : (
            <Box
              as={Link}
              to="/admin/nueva/"
              zIndex={1000}
              p={2}
              bg="rgba(255, 234, 194, 0.20)"
              backdropFilter="blur(11.75px)"
              borderRadius={"10px"}
              textAlign={"center"}
              position={"fixed"}
              bottom="100"
              right={"50"}
              _hover={{ bg: "rgba(0,0,0,0.1)" }}
            >
              <Icon as={FaPlusCircle} w={6} h={6} color={"primary.500"} />
              <Text color={"primary.500"} fontWeight={700}>
                Nuevo
              </Text>
            </Box>
          )}
        </Center>
      </Box>

      {isMobile ? (
        <Box position={"fixed"} bottom="0">
          <FooterAdmin />
        </Box>
      ) : (
        <Footer />
      )}
    </>
  );
};
