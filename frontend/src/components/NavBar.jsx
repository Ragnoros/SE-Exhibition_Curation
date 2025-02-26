import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { navStyles } from "../css/NavBar.styles";

export default function NavBar() {
  return (
    <Box sx={navStyles.bar}>
      <AppBar position="static" sx={navStyles.bar}>
        <Toolbar variant="dense" sx={navStyles.iconLayout}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            API 1 | API 2
          </Typography>
          <Typography variant="h6" color="inherit" sx={navStyles.loginLayout}>
            LOGIN
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
