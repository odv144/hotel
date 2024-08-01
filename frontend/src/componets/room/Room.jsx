import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  Wrap,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RoomModal } from "./RoomModal";
import { RoomCard } from "./RoomCard";

export const Room = () => {
  const slides = [
    {
      id: 1,
      title: "Habitación Queen",
      image: "/img/habitacionQueen.png",
      buttonText: "Ver más",
      service: [
        "Minibar",
        "Cafetera",
        "Caja de Segurida",
        "Wifi de Alta Velocidad",
      ],
    },
    {
      id: 2,
      title: "Habitación Dreams",
      image: "/img/habitacionDream.png",
      buttonText: "Ver más",
      service: [
        "Minibar",
        "Cafetera",
        "Kit de Amenities",
        "Wifi de Alta Velocidad",
      ],
    },
    {
      id: 3,
      title: "Habitación Relax",
      image: "/img/habitacionRelax.png",
      buttonText: "Ver más",
      service: [
        "Minibar",
        "Cafetera",
        "Tina",
        "Ducha efecto Lluvi",
        "Batas de Baño",
      ],
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedRoom, setSelectedRoom] = useState(null);
  const [openModals, setOpenModals] = useState({});

  const handleOpenModal = (roomId) => {
    setOpenModals((prev) => ({ ...prev, [roomId]: true }));
  };

  const handleCloseModal = (roomId) => {
    setOpenModals((prev) => ({ ...prev, [roomId]: false }));
  };

  // const {onOpen } = useDisclosure();
  // const onOpen = useCallback((room) => {
  //   setSelectedRoom(room);
  //   setIsOpen(true);
  // }, []);

  // const onClose = useCallback(() => {
  //   setIsOpen(false);
  //   setSelectedRoom(null);
  // }, []);

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false });
  const nextSlide = useCallback(() => {
    if (!isOpen) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [slides.length, isOpen]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!Object.values(openModals).some((isOpen) => isOpen)) {
        nextSlide();
      }
    }, 7000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <Stack
      width={["395px", "525px", "100%"]}
      maxWidth={["430px", "100%"]}
      p={10}
      color="black"
      bg={"white"}
    >
      <Box>
        <Text as="h2" fontSize="2xl" fontWeight="bold" textAlign={"left"}>
          Conocé las habitaciones
        </Text>
        <Text as="h4" textAlign={"left"}>
          Nuestras habitaciones combinan elegancia y confort con modernas
          comodidades, conocelas.
        </Text>
      </Box>
      {isMobile ? (
        <Box position="relative" h={"450px"} overflow="hidden">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide + 1}`}
              objectFit="cover"
              borderRadius={"16px"}
              m="auto"
              w={["387px", "500px"]}
              h={"322px"}
              // h="400px"
            />
          </motion.div>
          <Flex position="absolute" bottom="20px" width="100%" justify="center">
            {slides.map((_, index) => (
              <Button
                key={index}
                as="button"
                bg={currentSlide === index ? "white" : "whiteAlpha.400"}
                w="30px"
                h="4px"
                // borderRadius="50%"
                mx="2px"
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </Flex>
          <Box
            position="absolute"
            top="75%"
            left="5%"
            // transform="translate(-50%, -50%)"
            textAlign="left"
            size="24px"
          >
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
              {slides[currentSlide].title}
            </Text>
            <Button
              leftIcon={<FaPlus />}
              variant={"outline"}
              onClick={() => handleOpenModal(slides[currentSlide].id)}
            >
              Ver más
            </Button>
          </Box>
        </Box>
      ) : (
        <Center>
          <Wrap justify={"space-between"}>
            {slides.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                name={room.title}
                image={room.image}
                service={room.service}
                onOpen={() => handleOpenModal(room.id)}
              />
            ))}
          </Wrap>
        </Center>
      )}
      {slides.map((room) => (
        <RoomModal
          key={room.id}
          isOpen={openModals[room.id] || false}
          onClose={() => handleCloseModal(room.id)}
          name={room.title}
          img={room.image}
          service={room.service}
        />
      ))}
    </Stack>
  );
};
