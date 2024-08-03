import { Box, Button, Center, Flex, Img, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Center h="100vh" bg="grey">
      <VStack verticalAlign={"center"} flexDirection={"column"}>
        <Flex>
          <Box>
            <Img src="/img/construccion.jpg" w="100%" />
          </Box>
        </Flex>
      <Button>
        <Link to="/">Inicio</Link>
      </Button>
      </VStack>
    </Center>
  );
};

export default Error;
