import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FlightSearchBar, NavBar } from "./components";
import { callUs, coverImage, icon } from "./assets";
import { Box, Collapse, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  Container,
  CoverContiainer,
  GradiantCoverCotainer,
} from "./components/StyledComponents";

import "./App.css";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: "#9B30BF",
      darker: "#6c2185",
      light: "#af59cb,",
    },
    primary: {
      darker: "#1e66a5",
      main: "#2C92EC",
      light: "#56a7ef",
    },
    neutral: {
      main: "#fff",
    },
    text: { main: "#000" },
  },
  typography: {
    // fontFamily: `'Oxygen', sans-serif`,
  },
});

theme.typography.h3 = {
  // fontSize: "3rem",
  fontWeight: "100",
  fontSize: "1.5rem",

  // "@media (min-width:768px)": {
  //   fontSize: "1.5rem",
  // },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "4rem",
  },
};

theme.typography.h6 = {
  // fontSize: "3rem",
  fontWeight: "100",
  fontSize: "1rem",

  // "@media (min-width:768px)": {
  //   fontSize: "1.5rem",
  // },
  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2rem",
  },
};

function App() {
  const navItemNames = ["Home", "Travel Packages", "Visa", "Contact Us"];
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CoverContiainer coverimage={coverImage} id={navItemNames[0]}>
          <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
            <NavBar
              title="Alam's Aviation"
              navItemNames={navItemNames}
              logo={icon}
            />
            <Typography variant="h3" color="#ffff" textAlign="center">
              Ready to Travel?
            </Typography>
            <Typography variant="h3" color="#ffff" textAlign="center">
              We’ve Got Great Deals For You!
            </Typography>
            <FlightSearchBar />
          </Collapse>
        </CoverContiainer>

        <Container id={navItemNames[1]} bgcolor="#f5f5f5">
          <Typography variant="h3" color="#000" textAlign="center">
            Our Packages
          </Typography>
        </Container>
        <Container id={navItemNames[2]} bgcolor={"gold"}></Container>
        <Container
          id={navItemNames[3]}
          bgcolor="#fffff"
          style={{
            position: "relative",
          }}
        >
          <GradiantCoverCotainer
            coverimage={callUs}
            style={{ minHeight: "50vh" }}
            size="cover"
          >
            <Typography variant="h3" color="#ffff" textAlign="center">
              Get in touch?
            </Typography>
            <Box sx={{ m: 4 }}>
              <Typography variant="h6" color="#ffff" textAlign="center">
                Want to book a flight or a deal?
              </Typography>
              <Typography variant="h6" color="#ffff" textAlign="center">
                We'd love to hear from you. Here's how you can reach us.
              </Typography>
            </Box>
          </GradiantCoverCotainer>
          <Box
            sx={{
              width: {
                xs: 250,
                sm: 350,
                md: 400,
                xl: 600,
              },
              height: {
                xs: 250,
                sm: 350,
                md: 350,
                xl: 600,
              },
              backgroundColor: "white",
              border: "1px solid #ececec",
              position: "absolute",
              top: "40%",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
