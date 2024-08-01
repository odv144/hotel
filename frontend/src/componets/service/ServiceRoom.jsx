import { AspectRatio, Box, Center, Flex, Image, Stack, Text } from "@chakra-ui/react";

export const ServiceRoom = ({title,img,desc}) => {
  return (
    <Box 
    m='2'
    borderRadius={"35px"}
    boxShadow=" 0px 4px 30px 0px #00000040">
      <Stack color="primary.500">
        <Flex flexDir={"column"} textAlign={"center"}>
          <AspectRatio maxH='300px' ratio={4/3}>

          <Image src={img}  borderRadius={"35px 35px 0px 0px"} />
          </AspectRatio>
          <Box borderTop={"9px solid"} borderTopColor={"primary.500"}>
            <Text as={"h2"} fontWeight={900}>
              {title}
            </Text>
            <Text p={5} textAlign={"left"}>
              {desc}
            </Text>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};
