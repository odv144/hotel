import { Box, Center, Flex, Icon, Text } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const HabitacionCardAdd = () => {
  return (
    <Flex m={2}>
      <Center
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        p={4}
        w={"330px"}
        h={"355px"}
        borderRadius={'10px'}
      >
        <Box
          borderRadius="10px"
          justifyContent={"space-between"}
          border="5px"
          // overflow="hidden"
          flexWrap={"wrap"}
          
          p={2}
        >
          <Box textAlign={'center'}>
            <Link to={`/admin/nueva/`}>
              <Text color={"primary.500"} fontWeight={700}>
                Nuevo
              </Text>
              <Icon as={FaPlusCircle} w={6} h={6} color={"primary.500"} />
            </Link>
          </Box>
        </Box>
      </Center>
    </Flex>
  );
};
