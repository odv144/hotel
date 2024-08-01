import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBed,
  FaEdit,
  FaRulerCombined,
  FaSnowflake,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import axios from "axios";
import { HabitacionContext } from "../../context/HabitacionContext";
import { Login } from "./Login";
import { BiBox } from "react-icons/bi";


export const HabitacionCard = ({ hab, imagen }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDeleting, setIsDeleting] = useState(false);
  const { setUpdateRoom } = useContext(HabitacionContext);
  const onDelete = async (id) => {
    try {
      await axios.delete(
        `https://hotel-oceano.onrender.com/api-room/roomtype/${id}/`
      );
      setUpdateRoom(true);
      // setHabitaciones(habitaciones.filter(hab => hab.id !== id));
    } catch (error) {
      console.error("Error al eliminar la habitación:", error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(hab.id);
      onClose();
    } catch (error) {
      console.error("Error al eliminar la habitación:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Center>
      <Flex m={2}>
        
        <Center>
          <Box
            borderRadius="10px"
            boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            justifyContent={"space-between"}
            border="5px"
            // overflow="hidden"
            flexWrap={"wrap"}
            bg="white"
            p={2}
          >
            <Box display={"flex"} justifyContent={"center"}>
              <Image
                src={imagen}
                alt={hab.description}
                w={"280px"}
                h={"110px"}
              />
            </Box>

            <Box p={4} w={"320px"}>
              <HStack spacing={5} mb={2}>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Icon as={FaUser} color="primary.500" />
                  <Text fontSize="sm">{hab.capacity} Personas</Text>
                </Flex>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Icon as={FaBed} color="primary.500" />
                  <Text fontSize="sm">{hab.beds}</Text>
                </Flex>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Icon as={FaRulerCombined} color="primary.500" />
                  <Text fontSize="sm">{hab.surface} m²</Text>
                </Flex>
                {hab.air_conditioner && (
                  <Flex flexDir={"column"} alignItems={"center"}>
                    <Icon as={FaSnowflake} color="primary.500" />
                    <Text>Air</Text>
                  </Flex>
                )}
                {hab.safe_deposit_box && (
                  <Flex flexDir={"column"} alignItems={"center"}>
                    <Icon as={BiBox} color="primary.500" />
                    <Text>Caja</Text>
                  </Flex>
                )}
              </HStack>

              <Text fontWeight="bold" fontSize="xl" mb={2}>
                {hab.name}
              </Text>

              <HStack flexDir={"column"}>
                {/* <Badge color="primary.500">ID: {hab.id}</Badge> */}
                <Text
                  as={"h3"}
                  textAlign={"center"}
                  fontSize={"2em"}
                  color={"text.verydark"}
                  bg={'secondary.200'}
                  p={'0px 15px'}
                  borderRadius={'20px'}
                >
                  {hab.type}
                </Text>
                <Spacer />
                <Text color="primary.500" fontWeight="semibold">
                  Precio: ${hab.price}
                </Text>
              </HStack>
              <HStack mt="4" spacing={4}></HStack>

              <HStack mt="4" spacing={4}>
                <Link to={`/admin/habitacion/${hab.id}`}>
                  <Icon 
                  as={FaEdit} w={6} h={6}
                  color="secondary.600" />
                </Link>
                <Icon
                  as={FaTrash}
                  w={5}
                  h={5}
                  color="negative.500"
                  cursor="pointer"
                  onClick={onOpen}
                />
                {/* <Link to={`/eliminar/${hab.id}`}>
                  <Icon as={FaTrash} w={6} h={6} color="negative.500" />
                </Link> */}
              </HStack>
            </Box>
          </Box>
          {/* Modal de confirmación */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirmar eliminación</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                ¿Estás seguro de que quieres eliminar esta habitación?
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button
                  colorScheme="red"
                  onClick={handleDelete}
                  isLoading={isDeleting}
                >
                  Eliminar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Center>
      </Flex>
    </Center>
  );
};
