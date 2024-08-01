import {Box, VStack,HStack,Text,Input,Button,FormControl,FormLabel,} from "@chakra-ui/react";

export const Reserve = () => {
  return (
    <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Consulta para reservas
        </Text>

        <HStack spacing={4} justify="center">
          <Button colorScheme="purple" variant="outline">
            Label
          </Button>
          <Button colorScheme="purple" variant="outline">
            Label
          </Button>
        </HStack>

        <FormControl>
          <FormLabel>Your label</FormLabel>
          <Input placeholder="Placeholder text" />
        </FormControl>

        <FormControl>
          <FormLabel>Your label</FormLabel>
          <Input placeholder="Placeholder text" />
        </FormControl>

        <FormControl>
          <FormLabel>Your label</FormLabel>
          <Input placeholder="Placeholder text" />
        </FormControl>

        <Button colorScheme="purple" alignSelf="center">
          Label
        </Button>
      </VStack>
    </Box>
  );
};
