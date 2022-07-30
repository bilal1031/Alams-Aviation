import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Link,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

export default function NavBar({ logo, title, navItemNames = [] }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <CustromAppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="logo" />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {!isMobile && (
          <Stack direction="row" spacing={2}>
            {navItemNames.map((item) => (
              <Button color="inherit" href={`#${item}`}>
                {item}
              </Button>
            ))}
          </Stack>
        )}
        {isMobile && (
          <>
            <SwipeableDrawer
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <List>
                {navItemNames.map((item) => (
                  <ListItem onClick={() => setOpenDrawer(false)} disablePadding>
                    <ListItemButton href={`#${item}`}>
                      <ListItemText>{item}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
            <IconButton
              onClick={() => setOpenDrawer(!openDrawer)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </CustromAppBar>
  );
}

const CustromAppBar = styled(AppBar)`
  background: rgba(90, 90, 90, 0.1);
  box-shadow: none;
`;

// const Typography = styled(Typography)`
//   //   background: #9b30bf;
//   //   background: linear-gradient(#9b30bf, #2c92ec);
//   //   -webkit-background-clip: text;
//   //   -webkit-text-fill-color: transparent;
// `;
