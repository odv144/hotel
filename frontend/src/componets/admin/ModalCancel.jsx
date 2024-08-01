// src/components/admin/ModalConfirm.jsx

import React from 'react';
import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { RoomCardCancel } from "./RoomCardCancel";

export const ModalCancel = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
            width="340px"
            bg="#FFFFFF"
            padding="20px"
            position="relative" // Agregado para el posicionamiento absoluto de elementos hijos
        >
            {/* Icono de confirmación */}
            <Box display="flex" flexDirection="column" alignItems="center" mb="20px">
                <Image src="/icons/cancel2.png" alt="icon" width="66px" height="66px" />
            </Box>

            {/* Botón "clear" en la esquina superior derecha */}
            <Box position="absolute" top="8px" right="8px" zIndex="10">
                <Image src="/icons/clear.png" alt="cerrar" width="24px" height="24px" />
            </Box>

            {/* Imagen de confirmación con título */}
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" mb="20px" position="relative">
                <Image src="/img/habconfirmar.png" alt="banner" width="292px" height="85px" />
                <Heading
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    width="292px"
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

            {/* Componente RoomCardConfirm */}
            <Box mt="24px" width="100%">
                <RoomCardCancel />
                
            </Box>

            {/* Botón de confirmar */}
            <Button mt="24px" colorScheme="blue" width="100%" backgroundColor="#FFDE9D">
                Confirmar
            </Button>
        </Box>
    );
};
