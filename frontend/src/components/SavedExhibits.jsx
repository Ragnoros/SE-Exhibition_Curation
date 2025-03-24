import React, { useState, useEffect } from "react";
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
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import { fetchExhibitDetails } from "../api/api";

const SavedExhibits = ({ savedExhibits }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedExhibit, setSelectedExhibit] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const exhibitsPerPage = 10;
  const { id } = useParams();
  const totalPages = Math.ceil(savedExhibits.length / exhibitsPerPage);

  const startIndex = (currentPage - 1) * exhibitsPerPage;
  const currentExhibits = savedExhibits.slice(
    startIndex,
    startIndex + exhibitsPerPage
  );

  useEffect(() => {
    const exhibitId = searchParams.get("exhibit");

    const exhibit = savedExhibits.find(
      (exhibit) =>
        exhibit.systemNumber === exhibitId || exhibit.id === exhibitId
    );

    if (exhibit && exhibit.systemNumber) {
      fetchExhibitDetails(exhibitId)
        .then((data) => {
          if (data) {
            setSelectedExhibit(data);
          } else {
            console.error("No data found for systemNumber:", exhibitId);
          }
        })
        .catch((error) =>
          console.error("Error fetching exhibit details:", error)
        );
    }
  }, [searchParams, savedExhibits]);

  const handleOpen = (exhibit) => {
    const exhibitId = exhibit.systemNumber || exhibit.id;
    setSelectedExhibit(exhibit);
    setSearchParams({ page: currentPage, exhibit: exhibitId });
  };

  const handleClose = () => {
    setSearchParams({ page: currentPage });

    setTimeout(() => {
      setSelectedExhibit(null);
    }, 0);
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
              key={exhibit.systemNumber || exhibit.id}
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
                selectedExhibit?.titles?.[0]?.title ||
                "No Title Available"}
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ textAlign: "justify" }} variant="body1">
                {selectedExhibit?.attributes?.description?.[1]?.value ||
                  selectedExhibit?.physicalDescription ||
                  "No description available"}
              </Typography>
              <Typography sx={exhibitInfo.category} variant="subtitle2">
                Category:{" "}
                {selectedExhibit?.attributes?.category?.[0]?.name ||
                  (selectedExhibit?.categories?.length > 0
                    ? selectedExhibit.categories
                        .map((category) => category.text)
                        .join(", ")
                    : "Unknown")}
              </Typography>
              <Typography sx={exhibitInfo.date} variant="subtitle2">
                Origin:{" "}
                {selectedExhibit?.attributes?.creation?.place?.[0]?.summary
                  ?.title ||
                  (selectedExhibit?.placesOfOrigin?.length > 0
                    ? selectedExhibit.placesOfOrigin[0].place?.text || "N/A"
                    : "N/A")}
              </Typography>

              <Typography sx={exhibitInfo.date} variant="subtitle2">
                Date:{" "}
                {selectedExhibit?.attributes?.creation?.date?.[0]?.value ||
                  (selectedExhibit?.productionDates?.length > 0
                    ? selectedExhibit.productionDates[0]?.date?.earliest
                    : "N/A")}
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
