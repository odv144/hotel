import { Button, Box, Text, Image } from "@chakra-ui/react";

function CustomButton({ label, imageUrl }) {
  return (
    <Button
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding="0px"
      gap="2px"
      width="54px"
      height="42px"
      bg="#FFDE9D"
      borderTop="2px solid #F5A200"
      boxShadow="0px -1px 4px rgba(255, 229, 179, 0.45), 0px 3px 4px rgba(255, 229, 179, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="8px"
      flex="none"
      order="0"
      flexGrow="0"
      position="relative"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        position="relative"
      >
        <Box
          width="100%"
          height="calc(100% - 20px)" // Ajustamos la altura para dejar espacio para la imagen y el texto
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Image src={imageUrl} alt="Button Image" width="18px" height="20px" borderRadius="8px" />
        </Box>
        <Text
          fontSize="8px"
          fontWeight="bold"
          color="#523600"
          textAlign="center"
          mt="2px" // Espacio entre la imagen y el texto
        >
          {label}
        </Text>
      </Box>
    </Button>
  );
}

export default CustomButton;
