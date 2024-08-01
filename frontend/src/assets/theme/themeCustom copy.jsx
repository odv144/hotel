import { extendTheme } from "@chakra-ui/react";

export const themeCustom = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "brand.dark" : "brand.light",
        color: props.colorMode === "dark" ? "red" : "yellow",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        fontWeight: props.theme.fontWeights.bold,
        _hover: {
          bg: props.colorMode === "dark" ? "red" : "purple.300",
        },
        color: "text",
        bg: props.colorMode === "dark" ? "green" : "cyan",
        borderRadius: "5px",
      }),
      variants: {
        "with-shadow": (props)=>({
          boxShadow: "0 0 2px 2px #efdfde",
          bg: props.colorMode==='dark'?"buttonText":'primary',
          color:props.colorMode==='dark'? "primary":'buttonText',
        }),
        
      },

      
      //   // 4. We can override existing variants
      //   solid: {
      //     bg: "yellow.300",
      //     color: "black",
      //     fontSize: "lg",
      //     border: "2px solid red",
      //   },
      //   "solid-full": {
      //     bg: "pink.300",
      //     color: "white",
      //     fontSize: "xl",
      //     border: "1px solid purple",
      //     _hover: {
      //       bg: "pink.900",
      //       border: "2px solid black",
      //       color: "yellow",
      //     },
      //   },
      //   // 5. We can add responsive variants
      //   sm: {
      //     bg: "teal.500",
      //     fontSize: "md",
      //   },
      // },
      // // 6. We can overwrite defaultProps
      // defaultProps: {
      //   size: "lg", // default is md
      //   variant: "sm", // default is solid
      //   colorScheme: "green", // default is gray
      // },
    },

    Input: {
      baseStyle: {
        field: {
          fontSize: "1.2em",
          color: "#9B959F",
          borderRadius: "5px",
          fontWeight: 500,
          _focus: {
            border: "1px solid purple",
          },
          _hover: {
            border: "1px solid purple",
          },
        },
      },
      variants: {
        nuevo: {
          field: {
            fontSize: "1em",
            color: "purple",
            border: "1px solid black",
            borderRadius: "15px",
            fontWeight: 900,
          },
        },
      },
    },
  },
 
  semanticTokens: {
    colors: {
      text: {
        _dark: "#FFFFFF",
        default: "#381E72",
       
      },
      button: {
        default: "brand.light",
        _dark: "#FFCDF4",
      },
      primary: {
        default:"#A48BB1",
        _dark: "#DACFF6",
      },
      secondary:{
        default:"#8C65AD",
        _dark:"#8C65FF",
      },
      buttonText:{
        default:"#0C0AFF",
        _dark:"#0C0A47",
      },
      brand: {
        light: "#fefefe",
        dark: "#000",
      },
    },
  },
});
