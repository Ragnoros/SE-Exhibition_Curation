import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FilterPanel from "./components/FilterPanel";
import Exhibit from "./components/Exhibit";
import { globalStyles } from "./scrollbar";
import { Routes, Route } from "react-router-dom";
import SavedExhibits from "./components/SavedExhibits.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [savedExhibits, setSavedExhibits] = useState([]);
  return (
    <>
      {globalStyles}
      <NavBar setSearchValue={setSearchValue} />
      <FilterPanel />

      <Routes>
        <Route
          path="/savedexhibits"
          element={<SavedExhibits savedExhibits={savedExhibits} />}
        />
        <Route
          path="/api1"
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
