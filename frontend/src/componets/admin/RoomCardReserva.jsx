import { Box, Image, Text, Grid, GridItem, Input } from '@chakra-ui/react';
import { StatusText } from "./StatusText.jsx";
import { formatDate } from '../../assets/formatDate.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const RoomCardReserva = ({
  status,
  id,
  quotation_id,
  check_in_date,
  check_out_date,
  room_id,
  client_id,
  created,
  updated
}) => {
  const BASE_URL = 'https://hotel-oceano.onrender.com'; 
  const [roomNumber, setRoomNumber] = useState('');
  const [room, setRoom] = useState({});
  const [roomType, setRoomType] = useState('');
  const [client, setClient] = useState(null);
  const [dataModal, setDataModal] = useState({});

  const getClient = async () => {
    try {
      const responseCli = await axios.get(`${BASE_URL}/api-client/client/${client_id}`);
      const cli = responseCli.data;
      setClient(cli);
      
    } catch (error) {
      console.error("Error fetching client:", error);
    }
  };

  const getTypeRoom = async (roomTypeId) => {
    try {
      const res = await axios.get(`${BASE_URL}/api-room/roomtype/${roomTypeId}`);
      const roomTypeData = res.data;
      setRoomType(roomTypeData.type);
    } catch (error) {
      console.error("Error fetching room type:", error);
    }
  };

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api-room/room/${room_id}`);
        const roomData = response.data;
        setRoom(roomData);
        setRoomNumber(roomData.number);
        if (roomData.room_type_id) {
          getTypeRoom(roomData.room_type_id);
        }
        getClient();
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();

    setDataModal({
      id:id,
      client,
      client_id,
      date_in: check_in_date,
      date_out: check_out_date,
      quotation_id:quotation_id,
      codRes: id,
    });
  }, [status, room_id, client_id, check_in_date, check_out_date, id]);

  return (
    <Box
      flexDirection="column"
      alignItems="center"
      padding="16px"
      gap="10px"
      width="100%" 
      height="auto" 
      background="#FFFFFF"
      boxShadow="0px 6px 58px rgba(196, 203, 214, 0.103611)"
      borderRadius="24px"
      marginBottom="20px" 
    >
      <Box display="flex" alignItems="center" p="4">
        <Image src="/icons/room.png" alt="room" width="48px" height="48px" />
        <Box ml="4">
          <Box display="flex">
            <Box mr="4">
              <Text fontSize="12px" fontWeight="bold" color="text.gris"> Tipo de habitación </Text>
              <Text fontSize="14px" color="text.verydark">{roomType}</Text>
            </Box>
           
              <Box>
                <Text fontSize="12px" color="text.gris" fontWeight="bold">Cliente</Text>
                {client &&
                <Text fontSize="14px" color="text.verydark"> {client?.is_company ? `${client.company.manager}`:`${client.individual.first_name}`}</Text>
                }
              </Box>
          
          </Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src="/icons/inactive.png" alt="calendar inactive" width="24px" height="24px" marginRight="8px" />
        <Text fontSize="14px" color="#91929E">In: {check_in_date} Out: {check_out_date}</Text>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap="10px" marginTop="16px">
        {status === "A" ? (
          <GridItem>
            <Text fontSize="12px" fontWeight="bold" color="text.gris"> N° Habitación </Text>
            <Text fontSize="14px" color="text.verydark">{roomNumber}</Text>
          </GridItem>
        ) : (
          <GridItem>
            <Text fontSize="12px" fontWeight="bold" color="text.gris">N° Personas</Text>
            <Text fontSize="14px" color="text.verydark"> 2</Text>
          </GridItem>
        )}

        {status !== "A" ? (
          <GridItem>
            <Text fontSize="12px" fontWeight="bold" color="text.gris">Solicitado</Text>
            <Text fontSize="14px" color="text.verydark">{formatDate(created)}</Text>
          </GridItem>
        ) : (
          <GridItem>
            <Text fontSize="12px" fontWeight="bold" color="text.gris">Confirmado</Text>
            <Text fontSize="14px" color="text.verydark">{formatDate(updated)}</Text>
          </GridItem>
        )}

        <GridItem>
          <Text fontSize="12px" fontWeight="bold" color="text.gris" align="center">Status</Text>
          {status === "A" && <StatusText status="confirmado" cliente={client} dataModal={dataModal}>Confirmado</StatusText>}
          {status === "C" && <StatusText status="cancelado" cliente={client} dataModal={dataModal}>Cancelado</StatusText>}
          {status === "R" && <StatusText status="porConfirmar" dataModal={dataModal} cliente={client}>Por Confirmar</StatusText>}
        </GridItem>
      </Grid>

      <Box>
        <Text fontSize="14px" fontWeight="bold" color="#20102B">Observaciones</Text>
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
  );
};
