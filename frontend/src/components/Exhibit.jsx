import React, { useState, useEffect } from "react";
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
import { fetchExhibits, fetchExhibitDetails } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import ExhibitCard from "./ExhibitCard";
import { exhibitStyles } from "../css/ExhibitCard.styles";
import { exhibitInfo } from "../css/ExhibitInfoDialog.styles";

const Exhibit = ({ searchValue, setSavedExhibits }) => {
  const [exhibits, setExhibits] = useState([]);
  const [selectedExhibit, setSelectedExhibit] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchExhibits(searchValue).then(setExhibits);
  }, [searchValue]);

  useEffect(() => {
    if (id) {
      fetchExhibitDetails(id)
        .then((data) => {
          if (data) {
            setSelectedExhibit(data);
          } else {
            console.error("No data found for ID:", id);
          }
        })
        .catch((error) => {
          console.error("Error fetching exhibit details:", error);
        });
    }
  }, [id]);

  const handleOpen = (exhibit) => {
    setSelectedExhibit(exhibit);
    navigate(`/vamapi/${exhibit.systemNumber}`, { replace: true });
  };

  const handleClose = () => {
    setSelectedExhibit(null);
    navigate("/vamapi", { replace: true });
  };

  return (
    <>
      <Box sx={exhibitStyles.mainContent}>
        <Box sx={exhibitStyles.grid}>
          {exhibits.map((exhibit) => (
            <ExhibitCard
              key={exhibit.systemNumber}
              exhibit={exhibit}
              setSavedExhibits={setSavedExhibits}
              onClick={() => handleOpen(exhibit)}
            />
          ))}
        </Box>
        <Pagination
        // count={totalPages}
        // page={currentPage}
        // onChange={handlePageChange}
        // color="primary"
        // showFirstButton
        // showLastButton
        />
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
              {selectedExhibit?.titles?.[0]?.title || "No Title Available"}
            </DialogTitle>
            <DialogContent>
              <Typography sx={{ textAlign: "justify" }} variant="body1">
                {selectedExhibit?.physicalDescription ||
                selectedExhibit?.summaryDescription ||
                selectedExhibit?.production ? (
                  <>
                    {selectedExhibit?.physicalDescription}
                    {selectedExhibit?.physicalDescription &&
                      (selectedExhibit?.summaryDescription ||
                        selectedExhibit?.production) && <br />}

                    {selectedExhibit?.summaryDescription}
                    {selectedExhibit?.summaryDescription &&
                      selectedExhibit?.production && <br />}

                    {selectedExhibit?.production}
                  </>
                ) : (
                  "No description available"
                )}
              </Typography>
              <Typography sx={exhibitInfo.category} variant="subtitle2">
                Category:{" "}
                {selectedExhibit?.categories?.length
                  ? selectedExhibit.categories
                      .map((category) => category.text)
                      .join(", ")
                  : "Unknown"}
              </Typography>
              <Typography sx={exhibitInfo.date} variant="subtitle2">
                Origin:{" "}
                {selectedExhibit?.placesOfOrigin?.length > 0
                  ? selectedExhibit.placesOfOrigin[0].place?.text || "N/A"
                  : "N/A"}
              </Typography>
              <Typography sx={exhibitInfo.date} variant="subtitle2">
                Date:{" "}
                {selectedExhibit?.productionDates?.length > 0
                  ? selectedExhibit.productionDates[0].date?.earliest || "N/A"
                  : "N/A"}
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

export default Exhibit;
