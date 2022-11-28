import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: {
    Button: {
      defaultProps: {
        size: "sm", // default is md
        variant: "solid", // default is solid
        fontSize: "17px",
        rounded: "md",
        // colorScheme: 'green', // default is gray
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
  },
  styles: {
    global: {
      body: {
        // "bgGradient": "linear(to-r,#E55D87,blue.200,#5FC3E4)",
        "bgGradient": "linear(to-r,#D3CCE3,#E9E4F0)",
        // "bgGradient": "linear(to-r,#F2994A,#F2C94C)",
        "&::-webkit-scrollbar": {
          width: "4px",
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "8px",
          backgroundColor: "gray",
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: "8px",
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export default theme;
