import React from "react";
import {
  Card,
  Box,
  CardMedia,
  Typography,
  CardContent,
  Tooltip,
} from "@mui/material";
import { exhibitStyles } from "../css/ExhibitCard.styles";

function ExhibitCard({ exhibit }) {
  return (
    <Card sx={exhibitStyles.card}>
      {" "}
      <Box sx={exhibitStyles.mediaContainer}>
        <CardMedia
          component="img"
          sx={exhibitStyles.cardMedia}
          image={exhibit._images._primary_thumbnail || bookplaceholder}
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
      </CardContent>
    </Card>
  );
}

export default ExhibitCard;
