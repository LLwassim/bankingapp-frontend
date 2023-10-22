import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0078d4", // Primary color
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  spacing: 2, // Default spacing between components
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#0078d4", // Button background color
        color: "white", // Button text color
        borderRadius: 5, // Button border radius
      },
    },
  },
});

export default theme;
