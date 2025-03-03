import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchExhibits } from "../api/api";
import ExhibitCard from "./ExhibitCard";
import { exhibitStyles } from "../css/ExhibitCard.styles";

const Exhibit = () => {
  const [exhibits, setExhibits] = useState([]);
  useEffect(() => {
    fetchExhibits().then((data) => {
      console.log(data);
      setExhibits(data);
    });
  }, [1]);

  return (
    <>
      <Box sx={exhibitStyles.mainContent}>
        <Box sx={exhibitStyles.grid}>
          {exhibits.map((exhibit) => (
            <ExhibitCard key={exhibit.systemNumber} exhibit={exhibit} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Exhibit;
