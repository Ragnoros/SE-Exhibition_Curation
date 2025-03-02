import React from "react";
import { Card } from "@mui/material";
import { exhibitStyles } from "../css/ExhibitCard.styles";

function ExhibitCard({ exhibit }) {
  return (
    <Card sx={exhibitStyles.card}>{exhibit._currentLocation.displayName}</Card>
  );
}

export default ExhibitCard;
