import "./App.css";
import NavBar from "./components/NavBar";
import FilterPanel from "./components/FilterPanel";
import Exhibit from "./components/Exhibit";
import { globalStyles } from "./scrollbar";

function App() {
  return (
    <>
      {globalStyles}
      <NavBar />
      <FilterPanel />
      <Exhibit />
    </>
  );
}

export default App;
