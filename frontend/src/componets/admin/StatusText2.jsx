
import { Text, Box, Image } from "@chakra-ui/react";

const statusStyles = {
  cancelado: {
    bg: "#F5667A1A",
    color: "#F2415A",
  },
  confirmado: {
    bg: "#D4EDDA",
    color: "#155724",
  },
  porConfirmar: {
    color: "#FFCD29",
    fontSize: "12px",
    textAlign: "center",
    fontFamily: "Nunito Sans",
  },
};

const StatusText = ({ status, children, onAccept, onCancel, mostrarIconos = true }) => {
  const styles = statusStyles[status] || {};

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        
      }}
    >
      <Text
        sx={{
          width: "91px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
          order: "1",
          flexGrow: "0",
          fontSize: "12px",
          ...styles,
          overflow: "hidden",
          borderRadius: "8px",
          
        }}
      >
        {children}
      </Text>
     
      {status === "porConfirmar" && mostrarIconos && (
        <Box
          sx={{
            position: "relative",
            right: "0",
            top: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            
          }}
        >
          
          <Box onClick={onAccept} cursor="pointer" boxSize={22}>
            <Image src="icons/check.png" />
          </Box>
          <Box onClick={onCancel} cursor="pointer" boxSize={22} marginTop="8px"> {/* Ajuste de margen entre las imágenes */}
            <Image src="icons/cancel.png" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default StatusText;
