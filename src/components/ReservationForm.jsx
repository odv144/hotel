import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ReservationForm = () => (
  <Box p={5}>
    <Formik
      initialValues={{ name: '', email: '', date: '' }}
      onSubmit={(values) => {
        console.log(values);
        alert('Reserva realizada con éxito');
      }}
    >
      {() => (
        <Form>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Field as={Input} name="name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Field as={Input} type="email" name="email" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Fecha de Reserva</FormLabel>
            <Field as={Input} type="date" name="date" />
          </FormControl>
          <Button mt={6} colorScheme="teal" type="submit">
            Reservar
          </Button>
        </Form>
      )}
    </Formik>
  </Box>
);

export default ReservationForm;
