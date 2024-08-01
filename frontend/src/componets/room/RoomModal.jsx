import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  VStack,
  Text,
  HStack,
  Icon,
  Box,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaUser, FaBed, FaRulerCombined, FaSnowflake } from "react-icons/fa";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { Link } from "react-router-dom";

export const RoomModal = ({ name, img, service, isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const modalSize = useBreakpointValue({ base: "full", md: "2xl", lg: "4xl" });
  return (
    <>
     
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
        <ModalOverlay  />
        <ModalContent>
          <ModalHeader bg="brand.light" color="white" minH={"50px"}>
            <Image src="/img/logo2linea.svg" />
          </ModalHeader>
          <ModalCloseButton color='secondary.500'/>
          <ModalBody p={0} color={"black"} bg={"white"}>
            <VStack align="stretch" spacing={4}>
              <Text fontSize="2xl" fontWeight="bold" p={4} display={"inline-block"} marginTop={3} >
                {name}
              </Text>
              <Image
                objectFit="cover"
                width="100%"
                height="100%"
                src={img}
                alt={name}
              />
              <Box p={4}>
                <Text fontSize="xl" fontWeight="bold" mb={2}>
                  Características
                </Text>
                <VStack align="stretch" spacing={2}>
                  <HStack>
                    <Icon as={FaUser} />
                    <Text>Capacidad: 3 personas</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaBed} />
                    <Text>Camas: 1 queen doble, 1 individual</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaRulerCombined} />
                    <Text>Medidas: 30 m²</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaSnowflake} />
                    <Text>Climatizador: Aire frío/calor</Text>
                  </HStack>
                </VStack>
              </Box>

              <Flex
                flexDir={"column"}
                borderTop={"1px solid #C0C0C2"}
                borderBottom={"1px solid #C0C0C2"}
                mb={2}
              >
                <Text
                  m={2}
                  color={"brand.light"}
                  fontWeight={900}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => setShow(!show)}
                >
                  Ver más características
                  {show ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </Text>
                {show && (
                  <Box padding={4}>
                    <VStack align="stretch" spacing={2}>
                      {service.map((servi, index) => (
                        <HStack key={index}>
                          <Text>{servi}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                )}
                <Flex w={"100%"} justifyContent={"flex-end"}>
                  <Button m={2}>
                    <Link to={`/consulta`}>Reserva</Link>
                  </Button>
                </Flex>
              </Flex>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
