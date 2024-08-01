import { Box, Button,  } from '@chakra-ui/react'

import { FaPlus } from 'react-icons/fa'


export const PracticaStilos = () => {
   
  return (
    <Box>
      <Button>Botón sin ningún estilo</Button>
      <Button m="5px" variant="with-shadow">Botón sombra</Button>
      <Button m="5px" bg={'purple.300'}leftIcon={<FaPlus />} variant={'with-shadow'}>Botón</Button>
      <Button m="5px" variant="outline">Botón outline</Button>
      <Button m="5px" variant="combined">Botón outline</Button>
    </Box>
  )
}
