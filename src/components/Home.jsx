import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => (
  <Box textAlign="center" py={10}>
    <Heading>Bienvenido a Oceano Hotel</Heading>
    <Text mt={4}>Disfruta de una estancia inolvidable con nosotros.</Text>
    <Button mt={6} as={Link} to="/reservation" colorScheme="teal">
      Hacer una Reserva
    </Button>
  </Box>
);

export default Home;
