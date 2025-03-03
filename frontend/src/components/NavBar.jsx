import * as React from "react";
import {
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navStyles } from "../css/NavBar.styles";

export default function NavBar() {
  return (
    <Box sx={navStyles.bar}>
      <AppBar position="static" sx={navStyles.bar}>
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          {/* Left Section (Menu + API Text) */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
          </Box>
          <Box sx={navStyles.searchLayout}>
            <TextField fullWidth label="Search" id="fullWidth" size="small" />
          </Box>
          {/* Right Section (Login) */}
          <Box>
            <Typography variant="h6" color="inherit">
              LOGIN
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
