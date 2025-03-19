import React, { useState } from "react";
import { exhibitStyles } from "../css/ExhibitCard.styles";
import SavedExhibitCard from "./SavedExhibitCard";
import { Box, Pagination } from "@mui/material";
import { paginationBar } from "../css/PaginationBar.styles";

const SavedExhibits = ({ savedExhibits }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exhibitsPerPage = 10;

  const totalPages = Math.ceil(savedExhibits.length / exhibitsPerPage);

  const startIndex = (currentPage - 1) * exhibitsPerPage;
  const currentExhibits = savedExhibits.slice(
    startIndex,
    startIndex + exhibitsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Box sx={exhibitStyles.mainContent}>
        <Box sx={exhibitStyles.grid}>
          {currentExhibits.map((exhibit) => (
            <SavedExhibitCard
              key={savedExhibits.systemNumber}
              exhibit={exhibit}
            />
          ))}
        </Box>
        <Box sx={paginationBar.bar}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            showFirstButton
            showLastButton
            sx={paginationBar.navigaton}
          />
        </Box>
      </Box>
    </>
  );
};

export default SavedExhibits;
