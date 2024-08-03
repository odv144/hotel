import { Box, Text, VStack } from "@chakra-ui/react"


export const Feature = ({icon,text}) => {
  return (
    <Box color={'primary.900'} 
    borderWidth={1} 
    borderRadius="md"
     p={1}
     m={5} 
    w={'14em'}
    borderColor={'primary.200'}
    pt={'3em'}
    pb={'3em'}
    H={'16em'}
    >
    <VStack>
      {icon}
      <Text fontSize="sm" 
      textAlign="center"
      
      >{text}</Text>
    </VStack>
  </Box>
  )
}

