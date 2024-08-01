import React, { useEffect, useState } from "react";

import { Footer } from "../footer/Footer";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Checkbox,
  VStack,
  useBreakpointValue,
  Flex,
  Select,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { ArrowBackIcon } from "@chakra-ui/icons";

export const NuevaHabitacion = () => {
  const imgUrl = useBreakpointValue({
    base: "/img/logo2linea.svg",
    md: "/img/logo1linea.svg",
  });
  const { id } = useParams();
  const [csrfToken, setCsrfToken] = useState("");

  const [formData, setFormData] = useState({
    type: "Queen",
    description: "",
    capacity: 0,
    beds: "",
    surface: 0,
    safe_deposit_box: false,
    air_conditioner: false,
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNumberInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datosAEnviar = {
        ...formData,
        capacity: Number(formData.capacity),
        surface: Number(formData.surface),
        // price: Number(formData.price),
      };
      delete datosAEnviar.id;

      // console.log(
      //   "Estructura por enviar:",
      //   JSON.stringify(datosAEnviar, null, 2)
      // );

      const response = await axios.post(`https://hotel-oceano.onrender.com/api-room/roomtype/`,
        datosAEnviar,
       
      );

      console.log("Data updated successfully:", response.data);
      // You might want to show a success message to the user here
    } catch (error) {
      console.error("Error updating data:", error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <>
      <Header imgUrl={imgUrl} />

      <Box
        p={4}
        maxW="sm"
        mx="auto"
        borderWidth="1px"
        borderRadius="lg"
        bg="varios.300"
      >
        <Flex alignItems="center" width="24px" height="24px" cursor="pointer">
          <Link to={"/admin/habitacion"}>
            <ArrowBackIcon color="primary.500" />
          </Link>
        </Flex>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Tipo de Habitación</FormLabel>
              <Input
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                placeholder="Tipo de habitación"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descripción de la habitación"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Capacidad</FormLabel>
              <NumberInput
                min={0}
                max={32767}
                value={formData.capacity}
                onChange={(value) => handleNumberInputChange("capacity", value)}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl>
              <FormLabel>Tipo de Camas</FormLabel>
              <Select
                name="beds"
                value={formData.beds}
                onChange={handleInputChange}
                placeholder="Seleccione tipo cama"
              >
              <option value='Twin'>Twin</option>
              <option value='Queen'>Queen</option>
              <option value='Single'>Single</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Superficie (m²)</FormLabel>
              <NumberInput
                min={0}
                max={32767}
                value={formData.surface}
                onChange={(value) => handleNumberInputChange("surface", value)}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl>
              <Checkbox
                name="safe_deposit_box"
                isChecked={formData.safe_deposit_box}
                onChange={handleInputChange}
              >
                Caja de seguridad
              </Checkbox>
            </FormControl>

            <FormControl>
              <Checkbox
                name="air_conditioner"
                isChecked={formData.air_conditioner}
                onChange={handleInputChange}
              >
                Aire acondicionado
              </Checkbox>
            </FormControl>

            <FormControl>
              <FormLabel>Precio</FormLabel>
              <Input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Precio por noche"
              />
            </FormControl>

            <Button type="submit" variant={"filled"}>
              Guardar
            </Button>
          </VStack>
        </form>
      </Box>
      
    </>
  );
};