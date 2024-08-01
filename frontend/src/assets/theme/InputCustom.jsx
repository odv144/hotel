export const InputCustom = {
    // baseStyle: {
    //     field: {
    //       fontSize: "1.2em",
    //       color: "#040F24",
    //       borderRadius: "5px",
    //       fontWeight: 500,
    //       _focus: {
    //         border: "1px solid purple",
    //       },
    //       _hover: {
    //         border: "1px solid purple",
    //       },
    //     },
    //   },
     
    baseStyle: {
      field: {
        bg: "white",
        border: "1px solid",
        borderColor: "varios.200",
        fontSize: "14px",
        width: "365px",
        height: "40px",
        padding: "10px 16px",
        borderRadius: "5px ",
        border: "1px solid ",
        _placeholder: {
            color: "varios.500",
            fontStyle: 'italic',
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
            _placeholder: {
              color: 'blue.300',
              fontStyle: 'italic',
            },
          },
        },
      },
    defaultProps: {
      variant: "unstyled",
    },
  };
  