import React, { useEffect, useState } from "react";
import { fetchScienceExhibits } from "../api/api";

const ScienceExhibit = () => {
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    fetchScienceExhibits();
  }, []);

  return <div></div>;
};

export default ScienceExhibit;
