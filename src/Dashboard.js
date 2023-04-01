import "@progress/kendo-theme-material/dist/all.css";
import { useEffect, useState } from "react";
import { deletePositionFromDB, getPositionsFromDB, storePositionToDB, updatePositionFromDB } from "./ApiInterface";
import NavigationBar from "./components/NavigationBar";
import storePositionsToDynomoDB from "./crud_components/StorePositionToDynomoDB";
import { TileLayout } from "@progress/kendo-react-layout";
import { storePositionsToLocalStorage } from "./LocalStorage";
import { getPositionsFromLocalStorage } from "./LocalStorage";
import GetWidget from "./crud_components/GetWidgets";

const Dashboard = () => {
    const initialPositions = [
    ];

    const initialWidgets = [
    ];

    //setting state for both positions and widgets
    const [widgets, setWidgets] = useState(initialWidgets);
    const [positions, setPositions] = useState([initialPositions]);

    useEffect(async () => {
        await getPositionsFromDb();
        let positions = await getPositionsFromLocalStorage();
        let widgets = await convertPositionsToWidgets(positions);
        setPositions(positions)
        setWidgets(widgets)
    }, [])

    // method to retrieving positions from API/DB on render and then store the positions to local cache
    async function getPositionsFromDb() {
        const newPositions = await getPositionsFromDB()
        storePositionsToLocalStorage(newPositions)
    }

    const deleteWidget = async (id) =>{
        deletePositionFromDB(id)
        let newPositions = await getPositionsFromLocalStorage();
        let newWidgets = await convertPositionsToWidgets(newPositions);
        for(let index in newPositions){
            if(newPositions[index].id === id){
                newPositions.splice(index, 1)
            }
        }
        for(let index in newWidgets){
            if(newWidgets[index].id === id){
                newWidgets.splice(index, 1)
            }
        }
        setWidgets(newWidgets)
        setPositions(newPositions)
        await storePositionsToLocalStorage(newPositions)
    }

    // method to retrieve positions from db
    async function convertPositionsToWidgets(positions) {
        let temparray = []
        for(let i in positions){
            let widget = GetWidget(positions[i].type, deleteWidget, positions[i].id)
            temparray.push(widget)
        }
        return temparray;
    }

    //add widget to dashboard while storing widget in database
    async function addWidget(widget, position) {
        await storePositionToDB(position)
        let newPositions = positions.concat([position])
        let newWidgets = widgets.concat([widget])
        setPositions(newPositions)
        setWidgets(newWidgets)
    }

    const handleReposition = async e => {
        await storePositionsToLocalStorage(e.value)
        await storePositionsToDynomoDB(e.value)
        setPositions(e.value)
    }

    return (
        <div className="flex">
            <NavigationBar
                // storePositions={storePositionsToDynomoDB}
                addWidget={addWidget}
                positions={positions}
                deleteWidget={deleteWidget}
                widgets={widgets} />
            <div>
                <div className="k-display-flex">
                    <TileLayout
                        className="tileLayout"
                        columns={4}
                        rowHeight={255}
                        positions={positions}
                        gap={{ rows: 10, columns: 10 }}
                        items={widgets}
                        onReposition={handleReposition}
                    />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;