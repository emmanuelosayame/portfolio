export const prettyScrollBar = (
  {
    width,
    height,
    bgColor,
    rounded,
  }: {
    width?: string;
    height?: string;
    bgColor?: string;
    rounded?: string;
  } = { width: "5px", height: "", bgColor: "gray", rounded: "30px" }
) => ({
  "&::-webkit-scrollbar": {
    width,
    height: "50%",
    padding: "10px",
    top: "10px",
    // backgroundColor: bgColor,
    borderRadius: rounded,
  },
  "&::-webkit-scrollbar-thumb": {
    width,
    height,
    backgroundColor: bgColor,
    borderRadius: rounded,
  },
  "&::-webkit-scrollbar-track": {
    width,
    height: "50%",
    // backgroundColor: bgColor,
    borderRadius: rounded,
  },
});
