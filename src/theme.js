import { Container, Typography, Box, Link, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import EcoIcon from "@mui/icons-material/Eco";

// Custom theme with a green plants aesthetic
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    background: {
      default: "#F4F1DE",
    },
    text: {
      primary: "#387D3C",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;