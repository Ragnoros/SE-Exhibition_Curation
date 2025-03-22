import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FilterPanel from "./components/FilterPanel";
import Exhibit from "./components/Exhibit";
import { globalStyles } from "./scrollbar";
import { Routes, Route } from "react-router-dom";
import SavedExhibits from "./components/SavedExhibits.jsx";
import ScienceExhibit from "./components/ScienceExhibit.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [savedExhibits, setSavedExhibits] = useState([]);
  const [filterOptions, setFilterOptions] = useState({});

  // Handler function to update filter options
  const handleFilterChange = (newFilters) => {
    setFilterOptions(newFilters);
  };

  return (
    <>
      {globalStyles}
      <NavBar setSearchValue={setSearchValue} />

      {/* Pass the function to FilterPanel */}
      <FilterPanel onFilterChange={handleFilterChange} />

      <Routes>
        <Route
          path="/savedexhibits"
          element={<SavedExhibits savedExhibits={savedExhibits} />}
        />
        <Route
          path="/smapi/:id?"
          element={
            <ScienceExhibit
              searchValue={searchValue}
              setSavedExhibits={setSavedExhibits}
              filterOptions={filterOptions} // Pass filters to ScienceExhibit
            />
          }
        />
        <Route
          path="/vamapi/:id?"
          element={
            <Exhibit
              searchValue={searchValue}
              setSavedExhibits={setSavedExhibits}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
