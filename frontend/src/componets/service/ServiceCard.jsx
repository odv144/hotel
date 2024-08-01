import { Icon, Text, VStack } from "@chakra-ui/react"


export const ServiceCard = ({icon,label}) => {
  return (
    <VStack
    // bg="transparent"
    border={'2px solid grey'}
    borderRadius="xl"
    p={3}
    color="black"
    align="center"
    justify="center"
    spacing={1}
   
  >
    <Icon as={icon} boxSize={6} />
    <Text fontSize="sm">{label}</Text>
  </VStack>
  )
}
