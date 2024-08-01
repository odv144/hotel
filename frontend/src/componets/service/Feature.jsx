import { Box, Text, VStack } from "@chakra-ui/react"


export const Feature = ({icon,text}) => {
  return (
    <Box color={'primary.500'} 
    borderWidth={1} 
    borderRadius="md" p={1} m={1} 
    borderColor={'primary.500'}
   
    minH={'80px'}
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

