import React from "react";
import {
  Box,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  OutlinedInput,
  Button,
} from "@mui/material";
import { filterStyles } from "../css/FilterPanel.styles";

function FilterPanel() {
  return (
    <Box component="aside" sx={filterStyles.panel}>
      <FormControl sx={filterStyles.form}>
        <InputLabel
          id="demo-multiple-name-label"
          sx={{ border: "0px", boxShadow: "none", outline: "0px" }}
        >
          Name
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          input={<OutlinedInput label="Name" />}
        ></Select>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          mt: 1,
          bottom: 0,
          backgroundColor: "#D68D85",
          color: "#F7F0C3",
          borderRadius: "16px",
        }}
      >
        Apply
      </Button>
    </Box>
  );
}

export default FilterPanel;
