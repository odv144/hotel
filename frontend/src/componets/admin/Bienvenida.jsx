import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  useBreakpoint,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { Footer } from "../footer/Footer";
import { FaBed, FaCalendarAlt, FaConciergeBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";

export const Bienvenida = () => {
  const isMobile = useBreakpoint();
  return (
    <Box
      width="100%"
      height="100vh"
      backgroundImage={isMobile==='base'?"url('/img/fondoAdmin.jpeg')":"url('/img/fondoAdminDesktop.jpeg')"}
      backgroundSize="cover"
      backgroundPosition="center"
      display={'flex'}
      flexDirection={'column'}
      position="relative"
    >
     

      <Text
        fontSize="3em"
        fontWeight="bold"
        color="primary.600"
        letterSpacing={'-0.25px'}
        pb={10}
        pl={5}
        mt={10}
      >
        Bienvenido
      </Text>

      <VStack
        spacing={8}
        flex={1}
        justifyContent={"center"}
        borderRadius="3xl"
        mx={5}
        mb={20}
        p={10}
        bg='rgba(255, 234, 194, 0.20)'
        
        backdropFilter='blur(11.75px)'

      >
        <SimpleGrid
          columns={2}
          spacing={4}
          width="100%"
          flexWrap={"wrap"}
          display={["flex"]}
          justifyContent={"space-evenly"}
        >
          {[
            { icon: FaBed, text: "Habitaciones", url: "habitacion" ,estado:false},
             { icon: FaCalendarAlt, text: "Reservas", url: "reservacontext",estado:false},
            { icon: FaConciergeBell, text: "Servicios", url: "servicios" ,estado:true},
            { icon: FaUser, text: "Perfil", url: "perfil",estado:true},
          ].map((item, index) => (
            <Link to={`/admin/${item.url}`} key={index}>
              <Button
                leftIcon={<item.icon />}
                bg="primary.500"
                color="white"
                size="lg"
                maxW={"100px"}
                minW={"150px"}
                height="100px"
                fontSize="md"
                isDisabled={item.estado}
                borderRadius="xl"
                _hover={{ bg: "blue.700" }}
              >
                {item.text}
              </Button>
            </Link>
          ))}
        </SimpleGrid>
      </VStack>
      
    </Box>
  );
};
