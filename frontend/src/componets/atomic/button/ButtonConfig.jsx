import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonConfig = defineStyleConfig({
  // Variantes de botón
  variants: {
    base: {
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "25px",
      transition: "all 0.2s",
      bg: "buttonBg.default",
      color: "buttonText.default",
      _hover: {
        opacity: 0.8,
      },
      _active: {
        transform: "scale(0.98)",
      },
    },
    solid: (props) => ({
      bg: props.colorMode === "dark" ? "purple.200" : "purple.500",
      color: props.colorMode === "dark" ? "gray.800" : "white",
      _hover: {
        bg: props.colorMode === "dark" ? "purple.300" : "purple.600",
      },
    }),
    outline: {
      size:"sm",     
      color:"yellow.400",
      borderColor:"yellow.400",
      _hover:{
        bg: 'yellow.400', color: 'black',
      },
    },
    "with-shadow": (props)=>({
        boxShadow: props.colorMode === 'dark' ? '3px  5px 2px rgba(239, 223, 222, 0.5)' : '3px 5px 2px rgba(0, 0, 0, 0.2)',
        bg: props.colorMode==='dark'?"buttonText.dark":'primary.default',
        color:props.colorMode==='dark'? "primary.dark":'buttonText.default',

      }),

    ghost: {
      color: "purple.500",
      _hover: {
        bg: "purple.50",
      },
    },
    //metodo para combinar todas las opciones de botones en una sola
    combined:(props)=>({
        ...ButtonConfig.variants.base,
        ...ButtonConfig.variants.solid(props),
        ...ButtonConfig.variants['with-shadow'](props),
        //...ButtonConfig.variants.ghost,

    }),
  },

  // Tamaños de botón
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
    lg: {
      fontSize: "lg",
      px: 8,
      py: 5,
    },
  },

  // Configuración por defecto
  defaultProps: {
    size: "md",
    variant: "base",
  },
});
