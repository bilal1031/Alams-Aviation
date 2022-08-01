import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FlightSearchBar, NavBar } from "./components";
import { callUs, coverImage, icon, callDeskIllustration } from "./assets";
import {
  Box,
  Collapse,
  Stack,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";

// import Card from "@mui/joy/Card";
// import CardCover from "@mui/joy/CardCover";
// import CardContent from "@mui/joy/CardContent";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Container,
  CoverContiainer,
  GradiantContainer,
  GradiantCoverCotainer,
  GradientText,
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
    fontFamily: "Roboto, sans-serif",
  },
});

theme.typography.h2 = {
  fontSize: "3rem",
  fontFamily: "Roboto, sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};
theme.typography.h3 = {
  fontWeight: "100",
  fontSize: "1.5rem",
  fontFamily: "Roboto, sans-serif",
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
theme.typography.button = {
  fontFamily: "Roboto, sans-serif",
};
theme.typography.h6 = {
  // fontSize: "3rem",
  fontFamily: "Roboto, sans-serif",
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

const App = () => {
  const navItemNames = ["Home", "Services", "Visa", "Contact Us"];
  const services = [
    {
      name: "Airline Reservations",
      imageUrl:
        "https://www.emperortraveline.com/wp-content/uploads/2021/06/Planning-a-trip.jpeg",
    },
    {
      name: "Umrah Packages",
      imageUrl:
        "https://images.unsplash.com/photo-1633174754673-95dd2842f8fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    },
    {
      name: "Customazied Trips",
      imageUrl:
        "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      name: "Visa Assistance",
      imageUrl:
        "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    },
    {
      name: "Worldwide Holel Booking",
      imageUrl:
        "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
    {
      name: "Travel Insurance",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    { name: "Car & Limousine Services", imageUrl: "" },
    { name: "Corporate Incentives", imageUrl: "" },
    {
      name: "Event Packages",
      imageUrl:
        "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    },
    { name: "Cruise Trips", imageUrl: "" },
  ];
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
              {/* Dream | Explore | Discover */}
            </Typography>
            <Typography variant="h3" color="#ffff" textAlign="center">
              We’ve Got Great Deals For You!
            </Typography>
            <FlightSearchBar />
          </Collapse>
        </CoverContiainer>

        <GradiantContainer
          id={navItemNames[1]}
          // bgcolor="#f5f5f5"
          sx={{ padding: 5 }}
          color1="rgba(155, 48, 191, 1)"
          color2="rgba(44, 146, 236,1)"
        >
          <Typography
            variant="h3"
            color="#fff"
            textAlign="center"
            fontWeight="400"
          >
            Our Services
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, md: 3, xl: 2 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
            padding={{ xs: 0, md: 3, xl: 8 }}
            paddingTop={{ xs: 2 }}
          >
            {services.map((service, index) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={index}
                sx={{ maxWidth: 400 }}
              >
                <Collapse in={true} timeout="auto">
                  <Box sx={{ overflow: "hidden", borderRadius: 2 }}>
                    <GradiantCoverCotainer
                      sx={{
                        borderRadius: 2,
                        background: "transparent",
                        position: "relative",
                        height: { xs: 150, lg: 250 },
                        minHeight: { xs: 150, lg: 250 },
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                      coverimage={service.imageUrl}
                      direction="to bottom"
                      color1="transparent"
                      color2="rgba(0,0,0,0.5)"
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {service.name}
                      </Typography>

                      <Button
                        size="large"
                        href="Contact Us"
                        // variant="contained"
                        onClick={(e) => e.preventDefault()}
                      >
                        Contact Us
                      </Button>
                    </GradiantCoverCotainer>
                  </Box>
                </Collapse>
              </Grid>
            ))}
          </Grid>
        </GradiantContainer>

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
            <Typography
              variant="h2"
              fontWeight="bold"
              color="#ffff"
              textAlign="center"
            >
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
          <Box sx={styles.contactUsBox}>
            <img
              src={callDeskIllustration}
              alt="Call Desk"
              style={{ objectFit: "contain" }}
              height={150}
            />
            <Typography variant="h6" textAlign="center">
              Talk to us on our call desk.
            </Typography>
            <Stack direction="column" marginTop={5} alignItems="start">
              <Box justifyContent="center" alignItems="center" display="flex">
                <LocalPhoneIcon color="primary" />
                <Typography variant="body1" textAlign="center">
                  +92-3434504054, +92-3001851859
                </Typography>
              </Box>
              <Box justifyContent="center" alignItems="center" display="flex">
                <EmailIcon color="primary" />
                <Typography variant="body1" textAlign="center">
                  alamsaviation@gmail.com
                </Typography>
              </Box>
              <Box justifyContent="center" alignItems="center" display="flex">
                <LocationOnIcon color="primary" />
                <Typography variant="body1" textAlign="center">
                  Shop No# 05, Main Canal Road, Harbunspura Morr, Lahore
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

const styles = {
  contactUsBox: {
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
  },
};
export default App;
