import { Box, Center, Img, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <Center bg={"secondary.200"} color="black" flexWrap={"wrap"} p={[2, 4]}  paddingTop={3} paddingBottom={5}>
      <Box display={"flex"} flexDirection={["column","column", "row"]} alignItems={"center"} justifyContent={"space-around"} p={"10px"}>
        <Box w={["100%","100%","45%"]} flexDirection={["column", "column", "row"]}>
          <Text
            as="h1"
            fontSize={["1.2em","1.5em","2em"]}
            fontWeight={900}
            textAlign={"center"}
          >
            Bienvenidos a Oceano Hotel
          </Text>
          <Text
            as="h3"
            textAlign={"justify"}
            marginRight={3}
            marginLeft={3}
            marginBottom={3}
            fontSize={["1em","1.2em","1.5em"]}
          >
            Ofrecemos una experiencia de lujo y comodidad en un entorno urbano
            vibrante. Con modernas instalaciones, un servicio excepcional y una
            ubicación céntrica, es el lugar ideal para viajeros de negocios,
            eventos corporativos y escapadas de ocio. Disfruta de nuestras
            elegantes habitaciones, deliciosas opciones gastronómicas y diversas
            amenidades que garantizan una estancia memorable.
          </Text>
        </Box>
        <Box flexDirection={["column", "row"]}>
          <Img src="/img/about.png" />
        </Box>
      </Box>
    </Center>
  );
};
