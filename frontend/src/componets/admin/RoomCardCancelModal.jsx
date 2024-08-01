import React from 'react';
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export const RoomCardCancelModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#FFFFFF">
        <ModalHeader>
        <Box display="flex" flexDirection="column" alignItems="center" mb="20px">
            <Image src="/icons/cancel2.png" alt="icon" width="66px" height="66px" />
        </Box>
        </ModalHeader>
        {/* Imagen de confirmación con título */}
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" mb="20px" position="relative">
                <Image src="/img/habconfirmar.png" alt="banner" width="100%" height="85px" />
                <Heading
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="100%"
                    height="40px"
                    background="rgba(255, 234, 194, 0.35)"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    backdropFilter="blur(2px)"
                    textAlign="center"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    padding="0px"
                    zIndex="5"
                    textColor="#0B265B"
                    size="32px"
                >
                    Cancelacion
                </Heading>
            </Box>
        <ModalCloseButton />
        <ModalBody>
          <Box
            flexDirection="column"
            alignItems="center"
            padding="5px"
            width="100%"
            height="auto"
            background="#FFFFFF"
            boxShadow="0px 6px 58px rgba(196, 203, 214, 0.103611)"
            borderRadius="24px"
            marginBottom="10px"
          >
            <Box display="flex" alignItems="center" p="4">
              <Box>
                <Box display="flex" justifyContent="flex-start">
                  <Box mr="40px">
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">
                      Tipo de habitación
                    </Text>
                    <Text fontSize="14px" color="text.verydark">
                      Cliente
                    </Text>
                  </Box>
                  <Box ml="30px">
                    <Text fontSize="12px" color="text.gris" fontWeight="bold">
                      Cod Reserva
                    </Text>
                    <Input fontSize="14px" color="text.verydark" defaultValue=" " />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="14px" color="#91929E">
                In: 20/04 Out: 22/04
              </Text>
            </Box>

            <Grid templateColumns="repeat(3, 1fr)" gap="10px" marginTop="16px">
              <GridItem>
                <Text fontSize="12px" fontWeight="bold" color="text.gris">
                  N° Habitación
                </Text>
                <Input fontSize="14px" color="text.verydark" defaultValue="" />
              </GridItem>
              <GridItem>
                <Text fontSize="12px" fontWeight="bold" color="text.gris">
                  Confirmado
                </Text>
                <Text fontSize="14px" color="text.verydark">
                  10 de abril
                </Text>
              </GridItem>
              <GridItem>
                <Text fontSize="12px" fontWeight="bold" color="text.gris" align="center">
                  Status
                </Text>
              </GridItem>
            </Grid>

            <Box>
              <Text fontSize="14px" fontWeight="bold" color="#20102B">
                Observaciones
              </Text>
              <Input
                placeholder="Escribe tus observaciones aquí"
                marginTop="8px"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '12px',
                  width: '100%',
                  height: '44px',
                  boxShadow: '0px 1px 2px 0px #4D40551A',
                  borderRadius: '4px',
                  flex: 'none',
                  order: '0',
                  flexGrow: '1',
                  border: '1px solid #4D40551A',
                }}
              />
            </Box>
          </Box>

          <Button mt="24px" colorScheme="blue" width="100%" backgroundColor="#FFDE9D">
                Confirmar
            </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};



