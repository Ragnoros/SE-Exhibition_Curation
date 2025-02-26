import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FilterPanel from "./components/FilterPanel";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <>
      <NavBar />
      <FilterPanel />
      <Exhibit />
    </>
  );
}

export default App;
