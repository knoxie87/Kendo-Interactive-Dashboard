import "@progress/kendo-theme-material/dist/all.css";
import { useState } from "react";
import ActiveJobs from "./components/ActiveJobs";
import TotalJobViews from "./components/TotalJobViews";
import MostPopularJob from "./components/MostPopularJob";
import JobCredits from "./components/JobCredits";
import { deletePosition, getPositions, storePosition, updatePosition } from "./ApiInterface";
import NavigationBar from "./components/NavigationBar";
import Tile from "./Tile";
import { v4 as uuidv4 } from 'uuid';
import { isConstValueNode } from "graphql";


const Dashboard = () => {
  const initialPositions = [
  ];

  //method retrieving positions from localstorage
const getPositionsFromLocalStorage =  initialPositions => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("dashboard-positions"))
  if(itemsFromLocalStorage){
    return itemsFromLocalStorage
  }
  return initialPositions
};

const [positions, setPositions] = useState(getPositionsFromLocalStorage(initialPositions))
const [loading, setLoad] = useState(false)
  //method to delete widget from state and DB
const deleteWidget = async (id) => {
  if(loading == false) {
    setLoad(true)
    await deletePosition(id)
    for (let i = 0; i < widgets.length; i++) {
      if (widgets[i].id === id) {
        widgets.splice(i,1)
      }
    }
    for (let i = 0; i < positions.length; i++) {
      if (positions[i].id === id) {
        positions.splice(i,1)
        const newPositions = [...positions]
        const newWidgets = [...widgets]
        setWidgets(newWidgets)
        setPositions(newPositions)
        localStorage.setItem("dashboard-positions", JSON.stringify(positions))
        console.log(widgets)
      }
    }
    setLoad(false)
  }
};

const addWidget = async (widget1,position1) => {
    positions.push(position1)
    widgets.push(widget1)
    const newPositions = [...positions]
    const newWidgets = [...widgets]
    setWidgets(newWidgets)
    setPositions(newPositions)
    localStorage.setItem("dashboard-positions", JSON.stringify(positions))  
};
  const initialWidgets = [
  ];


//method to store positions to localstorage and set state
const storePositionsToLocalStorage =  (newPositions) => {
localStorage.setItem("dashboard-positions",JSON.stringify(newPositions));
setPositions(newPositions)
}

//setting state for both positions and widgets
const [widgets, setWidgets] = useState(initialWidgets);

// method to retrieving positions from API/DB and then store the positions
const getPositionsFromDb = async () =>{
  const position = await getPositions()
  const temparray = []
  position.map( p => {
    const newarray = {id: p.id, order: parseInt(p.newOrder), col: parseInt(p.col), colSpan: parseInt(p.colSpan), rowSpan: parseInt(p.rowSpan) }
    temparray.push(newarray)
  })
  storePositionsToLocalStorage(temparray)
}

//method to update positions and store to local storage
const updatePositions = (position) => {
  updatePosition(position)
  getPositionsFromDb()
}

//storeing positions to DynomoDB then loading stored result
const storePositionsToDynomoDB = (positions) => {
  positions.map(async position => {
     await storePosition(position)
  })
  getPositionsFromDb()
}

//resetting all widgets
const resetWidgets = () => {
  setPositions(initialPositions);
  localStorage.setItem("dashboard-positions",JSON.stringify(initialPositions));
}
  
  return (
    <div className="flex">
    <NavigationBar 
    storePositions = {storePositionsToDynomoDB}
    addWidget = {addWidget}
    positions = {positions}
    deleteWidget = {deleteWidget}
    widgets = {widgets}/>
    <Tile
     resetWidgets = {resetWidgets} 
     storePositionsToLocalStorage = {storePositionsToLocalStorage}
     updatePositions = {updatePosition} 
     getPositionsFromDb = {getPositionsFromDb} 
     getPositionsFromLocalStorage = {getPositionsFromLocalStorage}  
     deleteWidget = {deleteWidget}
     positions = {positions}
     widgets = {widgets}
     />
    </div>
  );
}

export default Dashboard;