import {
  AspectRatio,
  Box,
  Center,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpoint,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

export const ServiceRoom = ({ title, img, desc }) => {
  const isMobil = useBreakpointValue({base:true,sm:true,md:false,xl:false});
  return (
    <>
   
    {!isMobil
      ?
      (

      <Box position="relative"
       width="66vw" 
       height="400px" 
       borderRadius="md" 
       overflow="hidden"
       mb={5}
       mt={5}
        // boxShadow="md"
        >
      <Image src={img} alt={title} objectFit="cover" height="75%" width="100%" />
     <Flex
      direction={'column'}
        position="absolute"
        bottom="20px"
        left="10%"
        borderRadius={"0px 0px 42px 42px"}
        width="80%"
        height="50%"
        // backgroundColor="rgba(0, 0, 0, 0.6)"
       bg='white'
       borderTop={"19px solid"}
        borderTopColor={"primary.500"}
        backdropBlur={'62.54px'}
        boxShadow=" 0px 4px 30px 0px #00000040"
      
        alignItems="center"
        justifyContent="center"
      >
        <Text 
        color="primary.500" 
        fontSize={["1.5em","2em"]}
         width="90%" 
        textAlign="center"
        mb={3}
        mt={3}
        >
          {title}
        </Text>
        <Text color="primary.500" fontSize={"1.2em"} width="90%" textAlign="center">
          {desc}
        </Text>
      </Flex>
      </Box>
    ):(
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
    )}
   
   
  </>
  );
};
