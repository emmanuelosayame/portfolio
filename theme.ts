import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Space Grotesk', sans-serif`,
  },
  config,
  components: {
    Text: {
      baseStyle: {
        fontSize: "19px",
      },
    },
    Button: {
      defaultProps: {
        size: "sm", // default is md
        variant: "solid", // default is solid
        fontSize: "17px",
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
        "fontSize": "20px",
        "color": "gray",
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
