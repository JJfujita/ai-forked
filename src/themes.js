// src/themes.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007BFF",
    },
    secondary: {
      main: "#FFC107",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#007BFF",
    },
    secondary: {
      main: "#FFC107",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});
