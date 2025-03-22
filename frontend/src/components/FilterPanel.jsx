import React, { useState } from "react";
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

function FilterPanel({ onFilterChange }) {
  const [sortType, setSortType] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const handleApplyFilters = () => {
    if (typeof onFilterChange === "function") {
      onFilterChange({ sortType, dateFilter });
    } else {
      console.error("❌ onFilterChange is not a function");
    }
  };

  return (
    <Box component="aside" sx={filterStyles.panel}>
      <FormControl sx={filterStyles.form}>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          input={<OutlinedInput label="Sort By" />}
        >
          <MenuItem value="asc">Title (A-Z)</MenuItem>
          <MenuItem value="desc">Title (Z-A)</MenuItem>
          <MenuItem value="summary">Summary Length</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={filterStyles.form}>
        <InputLabel id="date-label">Date Filter</InputLabel>
        <Select
          labelId="date-label"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          input={<OutlinedInput label="Date Filter" />}
        >
          <MenuItem value="before-1900">Before 1900</MenuItem>
          <MenuItem value="1900-2000">1900 - 2000</MenuItem>
          <MenuItem value="after-2000">After 2000</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        sx={{
          mt: 5,
          ml: 2,
          backgroundColor: "#D68D85",
          color: "#F7F0C3",
          borderRadius: "16px",
          width: "70%",
        }}
        onClick={handleApplyFilters}
      >
        Apply
      </Button>
    </Box>
  );
}

export default FilterPanel;
