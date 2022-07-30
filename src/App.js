import { createTheme, makeStyles, ThemeProvider } from "@mui/material/styles";
import { FlightSearchBar, NavBar } from "./components";
import styled from "@emotion/styled";
import { coverImage, icon } from "./assets";
import { Collapse, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
    fontFamily: `'Oxygen', sans-serif`,
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  fontWeight: "100",

  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

function App() {
  const navItemNames = ["Home", "Travel Packages", "Visa", "Contact US"];
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
              icon={icon}
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

        <Container id={navItemNames[1]} bgcolor="tomato"></Container>
        <Container id={navItemNames[2]} bgcolor={"gold"}></Container>
        <Container id={navItemNames[3]} bgcolor={"dodgerblue"}></Container>
      </ThemeProvider>
    </div>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ bgcolor }) => bgcolor};
`;
const CoverContiainer = styled(Container)`
  background-image: url(${({ coverimage }) => (coverimage ? coverimage : "")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export default App;
