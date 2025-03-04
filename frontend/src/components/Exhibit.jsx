import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { fetchExhibits } from "../api/api";
import ExhibitCard from "./ExhibitCard";
import { exhibitStyles } from "../css/ExhibitCard.styles";

const Exhibit = ({ searchValue }) => {
  const [exhibits, setExhibits] = useState([]);
  useEffect(() => {
    fetchExhibits(searchValue).then((data) => {
      console.log(data);
      setExhibits(data);
    });
  }, [searchValue]);

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
