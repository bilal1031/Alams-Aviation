import React, { useState } from "react";
import {
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
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { CustromAppBar, GradientText } from "../StyledComponents";

export default function NavBar({ logo, title, navItemNames = [] }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <CustromAppBar position="fixed">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <img src={logo} alt="logo" width={50} />
        </IconButton>

        <GradientText
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 400 }}
          aria-label="title"
        >
          {title}
        </GradientText>
        {!isMobile && (
          <Stack direction="row" spacing={2}>
            {navItemNames.map((item, index) => (
              <Button color="primary" href={`#${item}`} key={index}>
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
              PaperProps={{ style: { width: "60%" } }}
              // swipeAreaWidth={40}
              // onOpen={() => setOpenDrawer(true)}
              disableSwipeToOpen={true}
              anchor="right"
            >
              <List sx={{ marginTop: 5 }}>
                {navItemNames.map((item, index) => (
                  <ListItem
                    onClick={() => setOpenDrawer(false)}
                    disablePadding
                    key={index}
                  >
                    <ListItemButton href={`#${item}`}>
                      <ListItemText>
                        <Typography color="primary">{item}</Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
            <IconButton
              onClick={() => setOpenDrawer(!openDrawer)}
              color="primary"
              aria-label="menu-button"
            >
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </CustromAppBar>
  );
}
