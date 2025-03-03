import React from "react";
import {
  Card,
  Box,
  CardMedia,
  Typography,
  CardContent,
  Tooltip,
  Chip,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { exhibitStyles } from "../css/ExhibitCard.styles";

function ExhibitCard({ exhibit }) {
  return (
    <Card sx={exhibitStyles.card}>
      {" "}
      <Box sx={exhibitStyles.mediaContainer}>
        <CardMedia
          component="img"
          sx={exhibitStyles.cardMedia}
          image={exhibit._images._primary_thumbnail}
          title={exhibit.objectType}
        />
      </Box>
      <CardContent sx={exhibitStyles.cardContent}>
        <Box sx={exhibitStyles.contentWrapper}>
          <Tooltip title={exhibit.objectType} placement="top">
            <Typography sx={exhibitStyles.title} variant="h6" component="h2">
              {exhibit.objectType}
            </Typography>
          </Tooltip>
        </Box>
        <Box sx={exhibitStyles.infoRow}>
          {exhibit._primaryDate && (
            <Chip
              size="small"
              label={`Created: ${new Date(exhibit._primaryDate).getFullYear()}`}
              sx={exhibitStyles.infoChip}
            />
          )}
          <Chip
            size="small"
            label={`Creator: ${exhibit._primaryMaker.name}`}
            sx={exhibitStyles.infoChip}
          />
        </Box>
        <IconButton sx={exhibitStyles.wishlistButton}>
          <FavoriteIcon sx={{ color: "#e94560" }} />
        </IconButton>
        <Box sx={exhibitStyles.chipContainer}>
          <Chip
            size="small"
            label={exhibit._currentLocation.displayName}
            sx={exhibitStyles.chip}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExhibitCard;
