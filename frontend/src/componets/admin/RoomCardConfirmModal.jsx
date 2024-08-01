import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";
import { StatusText } from "./StatusText";
import axios from "axios";
import { formatDate } from "../../assets/formatDate";

export const RoomCardConfirmModal = ({
  date_in,
  date_out,
  client,
  client_id,
  isOpen,
  onClose,
  estado,
  codRes,
}) => {
  const URL_BASE = "https://hotel-oceano.onrender.com";
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(""); // Nuevo estado para el ID de la habitación seleccionada
  const fecha = formatDate(Date.now());
  //consultar las cotizaciones de es
  useEffect(() => {
    // Cargar las habitaciones cuando el modal se abra
    if (isOpen) {
      getRooms();
    }
  }, [isOpen]);

  //para obtener todas las habitaciones y cargar el select
  const getRooms = async () => {
    try {
      const response = await axios.get(`${URL_BASE}/api-room/room/`);
      setRooms(response.data);
    } catch (error) {
      console.log("Se genero error al obtener las room");
    }
  };
  //al elegir la habitacion obtengo el resto de valores
  const handlRoom = (e) => {
    setSelectedRoomId(e.target.value);
    const room = rooms.find((r) => r.id === e.target.value);
    getRoomType(room.room_type_id);
    //console.log(room);
  };
  //para el tipo de habitacion especifico segun la seleccion
  const getRoomType = async (id) => {
    try {
      const response = await axios.get(`${URL_BASE}/api-room/roomtype/${id}`);
      setRoom(response.data);
      // console.log("data de roomtype")
      // console.log(response.data)
    } catch (error) {
      console.log("Se genero error al obtener las room type");
    }
  };

  const handleConfirm = async (selectedRoomId) => {
    const formData = {
      is_active: true,
      check_in_date: date_in,
      check_out_date: date_out,
      status: "R",
      room_id: selectedRoomId,
      client_id: client_id,
      quotation_id: codRes,
    };
    
    try {
      console.log(JSON.stringify(formData));
      const response = await axios.post(
        `${URL_BASE}/api-reservation/reservationroom/`,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      alert("Confirmación correctamente");
      onClose();
     
    } catch (error) {
      console.log("algo salio mal al confirmar");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#FFFFFF">
        <ModalHeader>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb="10px"
          >
            <Image
              src="/icons/check2.png"
              alt="icon"
              width="66px"
              height="66px"
            />
          </Box>
        </ModalHeader>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb="20px"
          position="relative"
        >
          <Image
            src="/img/habconfirmar.png"
            alt="banner"
            width="100%"
            height="85px"
          />
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
            Confirmación
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
            marginBottom="5px"
          >
            <Box display="flex" alignItems="center" p="4">
              <Box>
                <Box display="flex" justifyContent="flex-start">
                  <Box mr="40px">
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">
                      Tipo de habitación
                    </Text>
                    <Text fontSize="14px" color="text.verydark">
                      {room.type}
                    </Text>
                  </Box>
                  <Box mr="40px">
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">
                      Cliente
                    </Text>
                    <Text fontSize="14px" color="text.verydark">
                      {client}
                    </Text>
                  </Box>
                  <Box mr="40px">
                    <Text fontSize="12px" fontWeight="bold" color="text.gris">
                      Nro Cotizació
                    </Text>
                    <Text fontSize="14px" color="text.verydark">
                      {codRes}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="center">
              <Image
                src="/icons/inactive.png"
                alt="calendar inactive"
                width="24px"
                height="24px"
                marginRight="8px"
              />
              <Text fontSize="14px" color="#91929E">
                In: {date_in} Out: {date_out}
              </Text>
            </Box>

            <Grid templateColumns="repeat(3, 1fr)" gap="10px" marginTop="16px">
              <GridItem>
                <Text fontSize="12px" fontWeight="bold" color="text.gris">
                  N° Habitación
                </Text>
                <Select
                  value={selectedRoomId}
                  onChange={(e) => handlRoom(e)}
                  fontSize="14px"
                  color="text.verydark"
                >
                  <option value="">Seleccione una habitación</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.number}
                    </option>
                  ))}
                </Select>
              </GridItem>
              <GridItem>
                <Text fontSize="12px" fontWeight="bold" color="text.gris">
                  Confirmado
                </Text>
                <Text fontSize="14px" color="text.verydark">
                  {fecha}
                </Text>
              </GridItem>
              {/* <GridItem>
                <Text fontSize="12px" fontWeight="bold" color="text.gris" align="center">
                  Status
                </Text>
                {estado === 'confirmado' && (
                  <StatusText status="confirmado" mostrarIconos={false}>
                    Confirmado
                  </StatusText>
                )}
              </GridItem> */}
            </Grid>

            <Box>
              <Text fontSize="14px" fontWeight="bold" color="#20102B">
                Observaciones
              </Text>
              <Input
                placeholder="Escribe tus observaciones aquí"
                marginTop="8px"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "0px",
                  gap: "12px",
                  width: "100%",
                  height: "44px",
                  boxShadow: "0px 1px 2px 0px #4D40551A",
                  borderRadius: "4px",
                  flex: "none",
                  order: "0",
                  flexGrow: "1",
                  border: "1px solid #4D40551A",
                }}
              />
            </Box>
          </Box>
          <Button
            mt="24px"
            onClick={() => {
              handleConfirm(selectedRoomId);
            }}
            colorScheme="blue"
            width="100%"
            backgroundColor="#FFDE9D"
          >
            Confirmar
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
