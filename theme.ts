import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Text: {
      baseStyle: {
        fontSize: "17px",
      },
    },
    Button: {
      defaultProps: {
        size: "sm", // default is md
        variant: "solid", // default is solid
        fontSize: "15px",
        rounded: "md",
        // colorScheme: 'green', // default is gray
      },
    },
    Heading: {
      defaultProps: {
        size: "md",
      },
    },
    Input: {
      defaultProps: {
        size: "sm",
        // rounded: "md",
        borderRadius: 20,
      },
      baseStyle: {
        rounded: "md",
        borderRadius: 20,
      },
    },
    Textarea: {
      defaultProps: {
        size: "sm",
      },
    },
    Checkbox: {
      baseStyle: {
        icon: {
          color: "white",
        },
        control: {
          border: "1px",
          borderColor: "gray.300",
          borderRadius: "50%",
          _disabled: {
            borderColor: "gray.300",
            bg: "gray.200",
          },
        },
        label: {
          fontWeight: "medium",
          color: "gray.900",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        fontSize: "20px",
        color: "gray",
        // borderRadius:10
      },
    },
  },
});

export default theme;
