import React from "react";
import { Box, Heading, Text, VStack, Image, Center } from "@chakra-ui/react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

function Nosotros() {
  return (
    <>
      <Header />
      <Box p={4} m={"24px 20px 20px 40px"}>
        <VStack spacing={4} align="stretch">
          <Heading
            as="h1"
            fontsize={["32px", "45px"]}
            textAlign={["center", "left"]}
            color={"primary.800"}
          >
            SOBRE NOSOTROS
          </Heading>
          <Box width="139.22px" height="4px" gap="4px" ml={["auto", "0"]}>
            <Image
              src="/img/lines.png"
              alt="Lines"
              width="100%"
              height="100%"
            />
          </Box>
          <Text fontSize="14px" fontWeight="bold" textAlign={"justify"}>
            En Oceano Hotel, nos enorgullecemos de ofrecer una experiencia de
            lujo y confort en el corazón de la ciudad.
          </Text>
          <Text fontSize="14px" textAlign={"justify"}>
            Nuestro compromiso con la excelencia se refleja en cada detalle,
            desde nuestras elegantes habitaciones y modernas instalaciones hasta
            el servicio personalizado que brindamos a cada huésped. Ya sea que
            viajes por negocios o placer, nuestro objetivo es hacer de tu
            estancia una experiencia memorable y placentera.
          </Text>
          <Heading as="h2"  textAlign="left" fontWeight="bold">
            Valores
          </Heading>

          <Box display="flex" alignItems="center">
            <Image
              src="/img/Rectangle 25.png"
              alt="rectangle"
              width="2px"
              height="64px"
              marginRight="12px"
            />
            <Text fontSize="12px" textAlign={"justify"}>
              Excelencia en el Servicio: Nos esforzamos por proporcionar un
              servicio impecable y atento, anticipándonos a las necesidades de
              nuestros huéspedes y superando sus expectativas en cada
              interacción.
            </Text>
          </Box>

          <Box display="flex" alignItems="center">
            <Image
              src="/img/Rectangle 25.png"
              alt="rectangle"
              width="2px"
              height="64px"
              marginRight="12px"
            />
            <Text fontSize="12px" textAlign={"justify"}>
              Calidad y Confort: Nos dedicamos a mantener los más altos
              estándares de calidad en nuestras instalaciones y servicios,
              asegurando un ambiente cómodo y sofisticado para todos nuestros
              huéspedes.
            </Text>
          </Box>

          <Box display="flex" alignItems="center">
            <Image
              src="/img/Rectangle 25.png"
              alt="rectangle"
              width="3px"
              height="64px"
              marginRight="12px"
            />
            <Text fontSize="12px" textAlign={"justify"}>
              Integridad y Transparencia: Operamos con los más altos niveles de
              integridad y transparencia, asegurando la confianza y satisfacción
              de nuestros huéspedes y socios.
            </Text>
          </Box>
        </VStack>
      </Box>

      <Footer />
    </>
  );
}

export default Nosotros;
