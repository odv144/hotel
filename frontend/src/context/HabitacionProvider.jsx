import { useEffect, useState } from "react";
import { HabitacionContext } from "./HabitacionContext";
import axios from "axios";

export const HabitacionProvider = ({ children }) => {
  const URL_BASE = "https://hotel-oceano.onrender.com";
  const [rooms, setRooms] = useState([]);
  const [imgRooms, setImgRooms] = useState([]);
  const [updateRoom, setUpdateRoom] = useState(false);
  const [reservas, setReservas] = useState([]);
  const [consultas, setConsultas] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  const obtenerDatos = async () => {
    try {
      const respuesta = await axios.get(
        "https://hotel-oceano.onrender.com/api-room/roomtype/"
      ); // Cambia la URL por tu endpoint
      const imagen = await axios.get(
        "https://hotel-oceano.onrender.com/api-room/roomphoto/"
      );
      setImgRooms(imagen.data);
      setRooms(respuesta.data);
      setCargando(false);
    } catch (error) {
      setError(error.message);
      setCargando(false);
    }
  };
  useEffect(() => {
    obtenerDatos();
  }, [updateRoom]);
  //recupeacion de informacion de reservaciones para las card
  const obtenerConsultas = async () => {
    try {
      //realice un cambio para tomar el listado desde quotation
      //const response = await axios.get(URL_BASE+'/api-reservation/reservationroom/');
      const response = await axios.get(URL_BASE + "/api-quotation/quotation/");
      setConsultas(response.data);
    } catch (error) {
      setError(error.message);
      setCargando(false);
    }
  };

  const obtenerReservas = async () => {
    try {
      //realice un cambio para tomar el listado desde quotation
      //const response = await axios.get(URL_BASE+'/api-reservation/reservationroom/');
      const response = await axios.get(
        URL_BASE + "/api-reservation/reservationroom/"
      );
      setReservas(response.data);
    } catch (error) {
      setError(error.message);
      setCargando(false);
    }
  };
  useEffect(() => {
    obtenerReservas();
    obtenerConsultas();
  }, [updateRoom]);

  return (
    <HabitacionContext.Provider
      value={{
        rooms,
        imgRooms,
        obtenerDatos,
        reservas,
        consultas,
        setUpdateRoom,
        updateRoom,
      }}
    >
      {children}
    </HabitacionContext.Provider>
  );
};
