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
        <ModalContent  >
          <ModalHeader bg="brand.light" color="white" minH={"50px"}>
            <Image src="/img/logo2linea.svg" />
          </ModalHeader>
          <ModalCloseButton color='secondary.500'/>
          <ModalBody  color={"black"} bg={"white"}>
            <VStack 
            align="left" 
            // spacing={4}
            px={'10%'}
            
            >
              <Text fontSize="2.8em" 
              fontWeight="bold" 
              display={"inline-block"}
               marginTop={5} >
                {name}
              </Text>
              {/* <Flex justifyContent={'center'}> */}

              <Image 
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius={'16px'}
                src={img}
                alt={name}  
                
                />
              {/* </Flex> */}
              <Box>
                <Text fontSize="2em" fontWeight="bold" mb={2}>
                  Características
                </Text>
                <VStack align="stretch" spacing={2} fontSize={'1.5em'}>
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
                  fontWeight={400}
                  fontSize={'2.5em'}
                  textAlign={'center'}
                  _hover={{ cursor: "pointer" }}
                  onClick={() => setShow(!show)}
                >
                  Ver más características
                  {show ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </Text>
                {show && (
                  <Box padding={4}>
                    <VStack align="stretch" spacing={2} fontSize={'1.5em'}>
                      {service.map((servi, index) => (
                        <HStack key={index}>
                          <Text>{servi}</Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>
                )}
                <Flex w={"100%"} justifyContent={"center"}>
                  <Button m={2}>
                    <Link to={`/consulta`}>Consulta</Link>
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
