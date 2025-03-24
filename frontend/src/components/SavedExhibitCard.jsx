import React from "react";
import {
  Card,
  Box,
  CardMedia,
  Typography,
  CardContent,
  Tooltip,
  Chip,
} from "@mui/material";
import { exhibitStyles } from "../css/ExhibitCard.styles";
import noImage from "../assets/No_Image_Available.jpg";

function SavedExhibitCard({ exhibit, onClick }) {
  return (
    <Card sx={exhibitStyles.card} onClick={onClick}>
      <Box sx={exhibitStyles.mediaContainer}>
        <CardMedia
          component="img"
          sx={exhibitStyles.cardMedia}
          image={
            exhibit._images?._primary_thumbnail ||
            exhibit.attributes?.multimedia?.[0]?.["@processed"]?.large_thumbnail
              ?.location ||
            noImage
          }
          title={exhibit.objectType || "No Title Available"}
        />
      </Box>
      <CardContent sx={exhibitStyles.cardContent}>
        <Box sx={exhibitStyles.contentWrapper}>
          <Tooltip title={exhibit.objectType || "Unknown Type"} placement="top">
            <Typography sx={exhibitStyles.title} variant="h6" component="h2">
              {exhibit._primaryTitle ||
                exhibit.attributes?.summary?.title ||
                "No Title Available"}
            </Typography>
          </Tooltip>
        </Box>
        <Box sx={exhibitStyles.infoRow}>
          <Chip
            size="small"
            label={exhibit.id ? "Science Museum" : "Victoria & Albert Museum"}
            sx={exhibitStyles.infoChip}
          />
          {exhibit._primaryDate ? (
            <Chip
              size="small"
              label={`Created: ${new Date(exhibit._primaryDate).getFullYear()}`}
              sx={exhibitStyles.infoChip}
            />
          ) : exhibit.attributes?.creation?.date?.[0]?.from ? (
            <Chip
              size="small"
              label={`Created: ${exhibit.attributes.creation.date[0].from}`}
              sx={exhibitStyles.infoChip}
            />
          ) : null}

          <Chip
            size="small"
            label={`Creator: ${
              exhibit._primaryMaker?.name ||
              exhibit.attributes?.creation?.maker?.[0]?.name?.[0]?.value ||
              "Unknown Creator"
            }`}
            sx={exhibitStyles.infoChip}
          />
        </Box>
        <Box sx={exhibitStyles.chipContainer}>
          <Chip
            size="small"
            label={
              exhibit._currentLocation?.displayName ||
              exhibit.attributes?.creation?.place?.[0]?.summary?.title ||
              "Unknown Location"
            }
            sx={exhibitStyles.chip}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default SavedExhibitCard;
