import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import FilterPanel from "./components/FilterPanel";
import Exhibit from "./components/Exhibit";
import { globalStyles } from "./scrollbar";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      {globalStyles}
      <NavBar setSearchValue={setSearchValue} />
      <FilterPanel />
      <Exhibit searchValue={searchValue} />
    </>
  );
}

export default App;
