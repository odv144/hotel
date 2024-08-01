// src/components/admin/Reservaciones.jsx
import React, { useContext, useEffect, useState } from "react";
import { Box, Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { FooterAdmin } from "../footer/FooterAdmin";
import { RoomCardConsulta } from "./RoomCardConsulta";
import { RoomCardReserva } from "./RoomCardReserva";
import { MenuReservas } from "./MenuReservas";
import { HabitacionContext } from "../../context/HabitacionContext";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Footer } from "../footer/Footer";

export const Reservaciones = () => {
  const { reservas, consultas } = useContext(HabitacionContext);
  const [filtro, setFiltro] = useState("all");
  const isMobile= useBreakpointValue({base:true,sm:false,md:false,xl:false})
  return (
    <>
      <Header imgUrl={"/img/logo2linea.svg"} />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="20px"
        minHeight="100vh"
        bg="#CEC9C9"
      >
        {/* Componente del Título y Botón Volver */}
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          maxWidth="398px"
          padding="0px 10px 0px 16px"
          marginBottom="20px"
          bg="#CEC9C9"
        >
          {/* Botón Volver */}
          <Flex alignItems="center" width="24px" height="24px" cursor="pointer">
            <Link to={"/admin/home"}>
              <ArrowBackIcon color="primary.500" />
            </Link>
          </Flex>

          {/* Título Reservas */}
          <Heading
            width="127px"
            height="36px"
            fontFamily="Poppins"
            fontWeight="400"
            fontSize="28px"
            lineHeight="36px"
            color="#091E49"
          >
            Reservas
          </Heading>
        </Flex>
        <Box>
          <Image
            src="/img/ModalDatePicker.png"
            alt="calendar"
            width="395px"
            height="344px"
          />
        </Box>
        {/* Menú */}
        <MenuReservas setFiltro={setFiltro} filtro={filtro} />

        {filtro == "all"
          ? consultas.map((consulta) => (
              <RoomCardConsulta key={consulta.id} consulta={consulta} />
            ))
          : reservas
              .filter((reserva) => reserva.status === filtro)
              .map((reserva) => (
                <RoomCardReserva key={reserva.id} {...reserva} />
              ))}
        {isMobile ? <FooterAdmin /> : <Box w='100vw'> <Footer /></Box>}

      </Box>
    </>
  );
};
