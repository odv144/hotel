import {
  FaWifi,
  FaCar,
  FaGlassMartiniAlt,
  FaThermometerHalf,
  FaCoffee,
  FaLaptop,
} from "react-icons/fa";
import {
  SimpleGrid,
  Button,
  VStack,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Feature } from "./Feature";
import { Link } from "react-router-dom";
import { ServiceRoom } from "./ServiceRoom";
export const Service = () => {
  const serviRoom = [
    {
      key: 1,
      title: "Salón de Eventos",
      description:
        "Ideal para reuniones corporativas y charlas de grupo, nuestro salón de eventos ofrece un ambiente profesional con tecnología de punta y servicios personalizados para garantizar el éxito de tu evento.",
      image: "/img/evento.jpeg",
    },
    {
      key: 2,
      title: "Gym center",
      description:
        "Nuestro gimnasio cuenta con equipos modernos y un ambiente motivador, perfecto para mantener tu rutina de ejercicios .Ofrecemos todo lo que necesitas para una sesión de entrenamiento efectiva y revitalizante.",
      image: "/img/gym.jpeg",
    },
    {
      key: 3,
      title: "Restaurante",
      description:
        "Disfruta de una experiencia culinaria excepcional en nuestro restaurante. Ofrecemos un menú exquisito con una variedad de platos locales e internacionales, preparados con ingredientes frescos y de alta calidad.",
      image: "/img/restaurante.jpeg",
    },
  ];
  return (
    <VStack width="100%" maxWidth={["600px", "800px"]} mx="auto">
      <SimpleGrid columns={3} width="100%" spacing={[2, 10]}>
        <Feature icon={<FaLaptop size="24px" />} text="Espacio de Trabajo" />
        <Feature icon={<FaCoffee size="24px" />} text="Desayuno" />
        <Feature icon={<FaWifi size="24px" />} text="Free Wifi" />
        <Feature icon={<FaCar size="24px" />} text="Estacionamiento" />
        <Feature icon={<FaGlassMartiniAlt size="24px" />} text="Servicio bar" />
        <Feature
          icon={<FaThermometerHalf size="24px" />}
          text="Climatización"
        />
      </SimpleGrid>

      {serviRoom.map((room, index) => (
        <ServiceRoom
          key={index}
          title={room.title}
          img={room.image}
          desc={room.description}
        />
      ))}

      <Center width="100%">
        <Button mb={2} variant={"filled"} marginBottom={4}>
          <Link to={"/consulta"}>RESERVA CON NOSOTROS</Link>
        </Button>
      </Center>
    </VStack>
  );
};
