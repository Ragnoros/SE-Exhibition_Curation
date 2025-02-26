import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FilterPanel from "./components/FilterPanel";

function App() {
  return (
    <>
      <NavBar />
      <FilterPanel />
    </>
  );
}

export default App;
