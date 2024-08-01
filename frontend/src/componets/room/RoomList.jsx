import {
  Box,
  VStack,
  Text,

  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

import { RoomModal } from "./RoomModal";

export const RoomList = ({ image, name, service }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      {isMobile ? <Box>Mobile</Box> : <Box>Desktop</Box>}
      <Box bg="blue" width={"100%"} height={"300px"} display={"flex"} flexWrap={'wrap'}>
        <Box bg="red" width={"30%"} height={"150px"}m={2} ></Box>
        {
          !isMobile &&
        <Box bg="yellow" width={"30%"} height={"150px"}m={2} ></Box>
        }
        <Box bg="green" width={"30%"} height={"150px"}m={2} ></Box>
      </Box>

      <Box position="relative" height="200px" width="100%">
        <Image
          src={image}
          alt={name}
          objectFit="cover"
          width="100%"
          height="100%"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0,0,0,0.4)"
        />
        <VStack
          position="absolute"
          bottom="10px"
          left="10px"
          align="flex-start"
        >
          <Text
            color={["red", "white"]}
            fontSize={["2xl", "4xl"]}
            fontWeight="bold"
            m={4}
          >
            {name}
          </Text>

          <Box>
            <Text color="white">Informacion adicional para la habitacion</Text>
          </Box>

          <RoomModal name={name} img={image} service={service} />
        </VStack>
      </Box>
    </>
  );
};
