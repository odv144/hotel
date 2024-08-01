import React, { useContext, useState } from 'react';
import { Text, Box, Image } from "@chakra-ui/react";
import { RoomReservaConfirmModal } from './RoomReservaConfirmModal';
import {RoomCardCancelModal} from './RoomCardCancelModal';
import axios from 'axios';
import { HabitacionContext } from '../../context/HabitacionContext';

const statusStyles = {
  cancelado: {
    bg: "#F5667A1A",
    color: "#F2415A",
  },
  confirmado: {
    bg: "#D4EDDA",
    color: "#155724",
  },
  porConfirmar: {
    color: "#FFCD29",
    fontSize: "12px",
    textAlign: "center",
    fontFamily: "Nunito Sans",
  },
  reservado: {
    color: "#FFCD29",
    fontSize: "12px",
    textAlign: "center",
    fontFamily: "Nunito Sans",
    bg:'primary.400'
  },
};

export const StatusText = ({dataModal,cliente,status ,children, mostrarIconos = true }) => {
  const styles = statusStyles[status] || {};
  const BASE_URL = "https://hotel-oceano.onrender.com";
  const {setUpdateRoom} = useContext(HabitacionContext);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  
  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const openCancelModal = () => {
    setIsCancelModalOpen(true);
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };
  const anularReserva=async (id)=>{
    try {
     
      await axios.delete(
        `${BASE_URL}/api-reservation/reservationroom/${id}/`
      );
      alert("La eliminacion fue correcta")
      setUpdateRoom(true)
      // setHabitaciones(habitaciones.filter(hab => hab.id !== id));
    } catch (error) {
      console.error("Error al eliminar la consulta:", error);
    }
  }
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Text
          sx={{
            width: "91px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
            order: "1",
            flexGrow: "0",
            fontSize: "12px",
            ...styles,
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          {children}
        </Text>

        {status === "porConfirmar" && mostrarIconos && (
          <Box
            sx={{
              position: "relative",
              right: "0",
              top: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Box onClick={openConfirmModal} cursor="pointer" boxSize={22}>
              <Image src="/icons/check.png" alt="check" />
            </Box>
            {/* <Box onClick={openCancelModal} cursor="pointer" boxSize={22} marginTop="8px"> */}
            <Box onClick={()=>anularReserva(dataModal.id)} cursor="pointer" boxSize={22} marginTop="8px">
              <Image src={'/icons/cancel.png'} alt="cancel" />
            </Box>
          </Box>
        )}
      </Box>

      {/* Modales */}
      <RoomReservaConfirmModal 
      isOpen={isConfirmModalOpen} 
      onClose={closeConfirmModal} 
      estado={status} 
      
      date_in={dataModal.date_in}
      date_out={dataModal.date_out}
      // client = {cliente.is_company ? cliente.company.manager : client.individual?.first_name}
      client_id={dataModal.client_id}
      codRes = {dataModal.quotation_id}
      id={dataModal.id}
     
      />
      {/* <RoomCardCancelModal isOpen={isCancelModalOpen} onClose={closeCancelModal} estado={status}/> */}
    </>
  );
};

