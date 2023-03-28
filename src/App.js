import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import { useEffect, React } from 'react';
import ActiveJobs from "./components/ActiveJobs";
import TotalJobViews from "./components/TotalJobViews";
import MostPopularJob from "./components/MostPopularJob";
import JobCredits from "./components/JobCredits";
import GetPositions from "./crud_components/GetPositions";
import UpdatePositions from "./crud_components/UpdatePositions";
import { getPositions, storePosition } from "./ApiInterface";
import storePositionsToDynomoDB from "./crud_components/StorePositionToDynomoDB";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./Dashboard";


function App() {
  
  return (
    <div>
    <Dashboard />
  </div>
  );
}

export default App;