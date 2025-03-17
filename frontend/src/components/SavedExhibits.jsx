import React from "react";
import { exhibitStyles } from "../css/ExhibitCard.styles";
import SavedExhibitCard from "./SavedExhibitCard";
import { Box } from "@mui/material";

const SavedExhibits = ({ savedExhibits }) => {
  return (
    <>
      <Box sx={exhibitStyles.mainContent}>
        <Box sx={exhibitStyles.grid}>
          {savedExhibits.map((exhibit) => (
            <SavedExhibitCard
              key={savedExhibits.systemNumber}
              exhibit={exhibit}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SavedExhibits;
