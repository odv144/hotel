import { Text, Button, Image, WrapItem, Box } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export const RoomCard = ({ id, image, name, service, onOpen }) => {
  return (
    
   
      <Box   maxW={'395px'}>
        <Image src={image} alt={name} objectFit="cover" minH={'19em'} minW={'250px'} borderRadius={'16px'} />
        <Text color="black" fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Button leftIcon={<FaPlus />} variant={"outline"} onClick={onOpen}>
          Ver más
        </Button>
      </Box>
   
  );
};
