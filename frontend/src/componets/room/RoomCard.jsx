import { Text, Button, Image, WrapItem, Box } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

export const RoomCard = ({ id, image, name, service, onOpen }) => {
  return (
    <WrapItem w="30%">
      <Box>
        <Image src={image} alt={name} objectFit="cover" h="285px" />
        <Text color="black" fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Button leftIcon={<FaPlus />} variant={"outline"} onClick={onOpen}>
          Ver más
        </Button>
      </Box>
    </WrapItem>
  );
};
