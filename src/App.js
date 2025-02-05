import React from "react";
import { Container, Typography, Box, Link, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import ResponsiveAppBar from "./components/navbar";
import Snowfall from "./components/snowfall"; // Importing Snowfall animation

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[200],
    },
    background: {
      default: "#0D1B2A",
    },
    text: {
      primary: "#0D1B2A",
    },
  },
  typography: {
    fontFamily: "Gill Sans",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: 1.6,
    },
  },
});

const PrivacyPolicy = () => (
  <Box bgcolor="rgba(255, 255, 255, 0.8)" p={4} borderRadius={2} boxShadow={3} mb={4}>
    <Typography variant="h2" gutterBottom>
      Privacy Policy
    </Typography>
    <Typography variant="body1">
      Your privacy is important to us. This app collects minimal data to ensure your experience is smooth and secure. We do not share your data with third parties.
    </Typography>
  </Box>
);

const ContactInfo = () => (
  <Box bgcolor="rgb(234, 227, 219)" p={4} borderRadius={2} boxShadow={3}>
    <Typography variant="h2" gutterBottom>
      Contact Us
    </Typography>
    <Typography variant="body1" gutterBottom>
      Have questions or feedback? Reach out to us:
    </Typography>
    <Typography variant="body1">
      Email: <Link href="mailto:rays.of.light24@gmail.com" color="primary.main">rays.of.light24@gmail.com</Link>
    </Typography>
    <Typography variant="body1">
      Phone: <Link href="tel:+19032949798" color="primary.main">+1 903 294 9798</Link>
    </Typography>
  </Box>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Box position="relative" minHeight="100vh">
        <Snowfall /> {/* Adding Snowfall component here */}
        <Container
          maxWidth="md"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
            backgroundImage: "url('https://source.unsplash.com/1600x900/?nature,forest')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "2rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box textAlign="center" mb={4} style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "2rem", borderRadius: "1rem", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}>
            <Typography variant="h1" color="text.primary" gutterBottom>
              Welcome to Our Travel Site
            </Typography>
            <Typography variant="h2" color="primary.main">
              Your ultimate travel companion
            </Typography>
          </Box>

          <PrivacyPolicy />
          <ContactInfo />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
