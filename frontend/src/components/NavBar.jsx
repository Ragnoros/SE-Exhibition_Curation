import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  TextField,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navStyles } from "../css/NavBar.styles";
import { Link } from "react-router-dom";
import { fetchExhibits } from "../api/api";

export default function NavBar({ setSearchValue }) {
  const [search, captureSearch] = useState("");

  function handleSearch() {
    setSearchValue(search);
    captureSearch("");
  }

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
              <Link to="smapi" style={{ color: "white" }}>
                The Science Museum
              </Link>{" "}
              <Link
                to="/vamapi"
                className="nav-link"
                style={{ color: "white" }}
              >
                | Victoria & Albert Museum
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TextField
              fullWidth
              label="Search"
              id="fullWidth"
              size="small"
              sx={navStyles.searchLayout}
              value={search}
              onChange={(e) => captureSearch(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                width: 50,
                borderRadius: "16px",
                backgroundColor: "#D68D85",
                color: "#F7F0C3",
              }}
              onClick={handleSearch}
            >
              Submit
            </Button>
          </Box>

          {/* Right Section (Login) */}
          <Box>
            <Typography variant="h6" color="inherit">
              <Link
                to="/savedexhibits"
                style={{ color: "white" }}
                className="nav-link"
              >
                Saved Exhibits
              </Link>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
