import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box p={5}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          if (values.username === 'Admin' && values.password === 'Admin1234') {
            localStorage.setItem('auth', true);
            navigate('/admin');
          } else {
            alert('Credenciales incorrectas');
          }
        }}
      >
        {() => (
          <Form>
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Field as={Input} name="username" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Field as={Input} type="password" name="password" />
            </FormControl>
            <Button mt={6} colorScheme="teal" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
