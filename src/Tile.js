import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import GetPositions from "./crud_components/GetPositions";
import UpdatePositions from "./crud_components/UpdatePositions";
import storePositionsToDynomoDB from "./crud_components/StorePositionToDynomoDB";
import NavigationBar from "./components/NavigationBar";
import TotalJobViews from "./components/TotalJobViews";
import ActiveJobs from "./components/ActiveJobs";
import JobCredits from "./components/JobCredits";
import MostPopularJob from "./components/MostPopularJob";
import { useEffect } from 'react';


const Tile = (props) => {
  
    const onResetLayout = () => {
        props.resetWidgets()
      };
    
    const handleReposition = e => {
        props.storePositionsToLocalStorage(e.value)
    }


  return (
    <div>
    <h1>Job dashboard</h1>
    <div className="k-display-flex">
      <TileLayout
        columns={4}
        rowHeight={255}
        positions={props.positions}
        gap={{ rows: 10, columns: 10 }}
        items={props.widgets}
        retrievePositions
        onReposition={handleReposition}
        />
    </div>
  </div>
  );
}

export default Tile;