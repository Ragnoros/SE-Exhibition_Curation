import React, { useState } from "react";
import { exhibitStyles } from "../css/ExhibitCard.styles";
import SavedExhibitCard from "./SavedExhibitCard";
import {
  Box,
  Dialog,
  Button,
  Typography,
  DialogContent,
  DialogTitle,
  DialogActions,
  Pagination,
} from "@mui/material";
import { paginationBar } from "../css/PaginationBar.styles";
import { exhibitInfo } from "../css/ExhibitInfoDialog.styles";
import { useNavigate, useSearchParams } from "react-router-dom";

const SavedExhibits = ({ savedExhibits }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedExhibit, setSelectedExhibit] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const exhibitsPerPage = 10;

  const totalPages = Math.ceil(savedExhibits.length / exhibitsPerPage);

  const startIndex = (currentPage - 1) * exhibitsPerPage;
  const currentExhibits = savedExhibits.slice(
    startIndex,
    startIndex + exhibitsPerPage
  );

  const handleOpen = (exhibit) => {
    setSelectedExhibit(exhibit);
    setSearchParams({ page: currentPage, exhibit: exhibit.id });
  };

  const handleClose = () => {
    setSelectedExhibit(null);
    setSearchParams({ page: currentPage });
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Box sx={exhibitStyles.mainContent}>
        <Box sx={exhibitStyles.grid}>
          {currentExhibits.map((exhibit) => (
            <SavedExhibitCard
              key={savedExhibits.systemNumber || savedExhibits.id}
              exhibit={exhibit}
              onClick={() => handleOpen(exhibit)}
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
      <Dialog
        open={Boolean(selectedExhibit)}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        sx={exhibitInfo.dialogBox}
      >
        {selectedExhibit ? (
          <>
            <DialogTitle sx={{ color: "#F7F0C3", textAlign: "center" }}>
              {selectedExhibit?.attributes?.summary?.title ||
                "No Title Available"}
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ textAlign: "justify" }} variant="body1">
                {selectedExhibit?.attributes?.description?.[1]?.value ||
                  "No description available"}
              </Typography>
              <Typography sx={exhibitInfo.category} variant="subtitle2">
                Category:{" "}
                {selectedExhibit?.attributes?.category?.[0]?.name || "Unknown"}
              </Typography>
              <Typography sx={exhibitInfo.date} variant="subtitle2">
                Origin:{" "}
                {selectedExhibit?.attributes?.creation?.place?.[0]?.summary
                  ?.title || "N/A"}
              </Typography>
              <Typography sx={exhibitInfo.date} variant="subtitle2">
                Date:{" "}
                {selectedExhibit?.attributes?.creation?.date?.[0]?.value ||
                  "N/A"}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button
                sx={{
                  width: 50,
                  borderRadius: "16px",
                  backgroundColor: "#D68D85",
                  color: "#F7F0C3",
                }}
                onClick={handleClose}
              >
                Close
              </Button>
            </DialogActions>
          </>
        ) : (
          <DialogContent>
            <Typography variant="body1">Loading exhibit details...</Typography>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default SavedExhibits;
