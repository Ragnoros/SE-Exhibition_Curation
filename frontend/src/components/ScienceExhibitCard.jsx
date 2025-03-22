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
import { exhibitStyles } from "../css/ExhibitCard.styles";
import noImage from "../assets/No_Image_Available.jpg";

function ScienceExhibitCard({ exhibit, onClick, setSavedExhibits }) {
  function handleSave(exhibit) {
    setSavedExhibits((prevState) => {
      const isExhibitSaved = prevState.some(
        (savedExhibit) => savedExhibit.id === exhibit.id
      );
      if (isExhibitSaved) {
        return prevState;
      } else {
        return [...prevState, exhibit];
      }
    });
  }

  const imageUrl =
    exhibit.attributes?.multimedia?.[0]?.["@processed"]?.large_thumbnail
      ?.location || noImage;

  const title = exhibit.attributes?.summary?.title || "No Title Available";

  const creationDate =
    exhibit.attributes?.creation?.date?.[0]?.from || "Unknown";

  const creator =
    exhibit.attributes?.creation?.maker?.[0]?.name?.[0]?.value ||
    "Unknown Maker";

  const place =
    exhibit.attributes?.creation?.place?.[0]?.summary?.title ||
    "Unknown Location";

  return (
    <Card sx={exhibitStyles.card} onClick={onClick}>
      <Box sx={exhibitStyles.mediaContainer}>
        <CardMedia
          component="img"
          sx={exhibitStyles.cardMedia}
          image={imageUrl}
          title={title}
        />
      </Box>
      <CardContent sx={exhibitStyles.cardContent}>
        <Box sx={exhibitStyles.contentWrapper}>
          <Tooltip title={exhibit.objectType || "Unknown"} placement="top">
            <Typography sx={exhibitStyles.title} variant="h6" component="h2">
              {title}
            </Typography>
          </Tooltip>
        </Box>
        <Box sx={exhibitStyles.infoRow}>
          <Chip
            size="small"
            label={`Created: ${creationDate}`}
            sx={exhibitStyles.infoChip}
          />
          <Chip
            size="small"
            label={`Creator: ${creator}`}
            sx={exhibitStyles.infoChip}
          />
        </Box>
        <IconButton
          sx={exhibitStyles.wishlistButton}
          onClick={(event) => {
            event.stopPropagation();
            handleSave(exhibit);
          }}
        >
          <FavoriteIcon sx={{ color: "#e94560" }} />
        </IconButton>
        <Box sx={exhibitStyles.chipContainer}>
          <Chip size="small" label={place} sx={exhibitStyles.chip} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ScienceExhibitCard;
