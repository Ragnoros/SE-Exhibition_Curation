import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchExhibits } from "../api/api";

const Exhibit = () => {
  const [exhibit, setExhibit] = useState([]);
  useEffect(() => {
    fetchExhibits().then((data) => {
      console.log(data);
      setExhibit(data);
    });
  });
  return <Box></Box>;
};

export default Exhibit;
