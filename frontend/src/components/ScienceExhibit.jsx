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
import { useNavigate, useSearchParams } from "react-router-dom";
import { exhibitStyles } from "../css/ExhibitCard.styles";
import { exhibitInfo } from "../css/ExhibitInfoDialog.styles";
import { paginationBar } from "../css/PaginationBar.styles";
import ScienceExhibitCard from "./ScienceExhibitCard";

const ScienceExhibit = ({ searchValue, setSavedExhibits, filterOptions }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [fullExhibits, setFullExhibits] = useState([]);
  const [filteredExhibits, setFilteredExhibits] = useState([]);
  const [selectedExhibit, setSelectedExhibit] = useState(null);

  const currentPage = parseInt(searchParams.get("page")) || 1;
  const exhibitId = searchParams.get("exhibit");
  const pageSize = 10;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchScienceExhibits(1, 100, searchValue).then((data) => {
      setFullExhibits(data.items || []);
    });
  }, [searchValue]);

  useEffect(() => {
    let exhibitsToFilter = [...fullExhibits];

    if (filterOptions.sortType === "asc") {
      exhibitsToFilter.sort((a, b) =>
        a.attributes.summary.title.localeCompare(b.attributes.summary.title)
      );
    } else if (filterOptions.sortType === "desc") {
      exhibitsToFilter.sort((a, b) =>
        b.attributes.summary.title.localeCompare(a.attributes.summary.title)
      );
    } else if (filterOptions.sortType === "summary") {
      exhibitsToFilter.sort(
        (b, a) =>
          (a.attributes.description?.[1]?.value?.length || 0) -
          (b.attributes.description?.[1]?.value?.length || 0)
      );
    }

    exhibitsToFilter = exhibitsToFilter.filter((exhibit) => {
      const dateValue = exhibit.attributes?.creation?.date?.[0]?.value;
      const date = dateValue ? parseInt(dateValue, 10) : null;

      if (!date) return false;

      if (filterOptions.dateFilter === "before-1900") {
        return date < 1900;
      } else if (filterOptions.dateFilter === "1900-2000") {
        return date >= 1900 && date <= 2000;
      } else if (filterOptions.dateFilter === "after-2000") {
        return date > 2000;
      }
      return true;
    });

    setFilteredExhibits(exhibitsToFilter);
    setTotalPages(Math.ceil(exhibitsToFilter.length / pageSize));
  }, [fullExhibits, filterOptions]);

  const paginatedExhibits = filteredExhibits.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    if (!exhibitId) {
      setSelectedExhibit(null);
      return;
    }

    const foundExhibit = paginatedExhibits.find((e) => e.id === exhibitId);
    setSelectedExhibit(foundExhibit || null);
  }, [exhibitId, paginatedExhibits]);

  const handleOpen = (exhibit) => {
    setSelectedExhibit(exhibit);
    setSearchParams({ page: currentPage, exhibit: exhibit.id });
  };

  const handleClose = () => {
    setSearchParams({ page: currentPage });

    setTimeout(() => {
      setSelectedExhibit(null);
    }, 0);
  };

  const handlePageChange = (event, value) => {
    setSearchParams({ page: value });
  };

  return (
    <>
      <Box sx={exhibitStyles.mainContent}>
        <Box sx={exhibitStyles.grid}>
          {paginatedExhibits.map((exhibit) => (
            <ScienceExhibitCard
              key={exhibit.id}
              exhibit={exhibit}
              onClick={() => handleOpen(exhibit)}
              setSavedExhibits={setSavedExhibits}
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

export default ScienceExhibit;
