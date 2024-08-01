import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "./CustomButton"; 
import { Link } from "react-router-dom";

export const FooterAdmin = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="8px 16px"
      gap="8px"
      width="430px"
      height="274px"
      flex="none"
      order="2"
      alignSelf="stretch"
      flexGrow="0"
      zIndex="2"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding="12px 45px"
        gap="24px"
        position="absolute"
        width="430px"
        height="64px"
        left="0px"
        bottom="0px"
        bg="#091E49"
        backdropFilter="blur(2px)"
        flex="none"
        order="4"
        flexGrow="0"
        zIndex="4"
      >
        <Link to={'/admin/habitacion'}>
        <CustomButton label="Habitaciones" imageUrl="/icons/habitaciones.png" />
        </Link>
        <Link to={'/admin/reservaciones'}>
        <CustomButton label="Reservas" imageUrl="/icons/reservas.png" />
        </Link>
        <CustomButton label="Servicios" imageUrl="/icons/service.png" />
        <CustomButton label="Perfil" imageUrl="/icons/perfil.png" />
      </Flex>
    </Box>
  );
}

export default FooterAdmin;
