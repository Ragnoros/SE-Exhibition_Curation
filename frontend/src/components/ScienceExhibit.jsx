import React, { useEffect, useState } from "react";
import { fetchScienceExhibits } from "../api/api";
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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { exhibitStyles } from "../css/ExhibitCard.styles";
import { exhibitInfo } from "../css/ExhibitInfoDialog.styles";
import { paginationBar } from "../css/PaginationBar.styles";
import ScienceExhibitCard from "./ScienceExhibitCard";

const ScienceExhibit = () => {
  const [exhibits, setExhibits] = useState([]);
  const [selectedExhibit, setSelectedExhibit] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const pageSize = 10;

  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    setLoading(true);
    fetchScienceExhibits(currentPage, pageSize).then((data) => {
      setExhibits(data.items);
      setTotalPages(Math.ceil(data.total / pageSize));
      setLoading(false);
    });
  }, [currentPage]);

  useEffect(() => {
    if (id) {
      const foundExhibit = exhibits.find((exhibit) => exhibit.id === id);
      setSelectedExhibit(foundExhibit || null);
    } else {
      setSelectedExhibit(null);
    }
  }, [id, exhibits]);

  const handleOpen = (exhibit) => {
    setSelectedExhibit(exhibit);
    navigate(`/smapi/${exhibit.id}`, { replace: true });
  };

  const handleClose = () => {
    setSelectedExhibit(null);
    navigate("/smapi", { replace: true });
  };

  const handlePageChange = (event, value) => {
    setSearchParams({ page: value });
  };

  return (
    <>
      <Box sx={exhibitStyles.mainContent}>
        {loading ? (
          <Typography sx={{ textAlign: "center", marginTop: "20px" }}>
            Loading exhibits...
          </Typography>
        ) : (
          <Box sx={exhibitStyles.grid}>
            {exhibits.map((exhibit) => (
              <ScienceExhibitCard
                key={exhibit.id}
                exhibit={exhibit}
                onClick={() => handleOpen(exhibit)}
              />
            ))}
          </Box>
        )}

        <Box sx={paginationBar.bar}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            showFirstButton
            showLastButton
            disabled={totalPages <= 1} // Disable if only one page
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

export default ScienceExhibit;
