

function CustomButton({ label, imageUrl }) {
    return (
      <Button
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0px"
        gap="4px"
        margin="0 auto"
        width="51px"
        height="40px"
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
          <Image src={imageUrl} alt="Button Image" width="18px" height="20px" borderRadius="8px" />
          <Text
            fontSize="8px"
            fontWeight="bold"
            color="#523600"
            position="absolute"
            bottom="4px"
            left="50%"
            transform="translateX(-50%)"
          >
            {label}
          </Text>
        </Box>
      </Button>
    );
  }
  
  export default CustomButton;
  