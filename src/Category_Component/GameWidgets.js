import AgeOfEmpires from "../assets/JobWidgets/Age_of_Empires.jpg"
import AssassinsCreed from "../assets/JobWidgets/assassinsCreed.jpg"
import HaloInfinite from "../assets/JobWidgets/Halo_Infinite.png"
import Gwent from "../assets/JobWidgets/Gwent.jpg"
import AddWidget from "../crud_components/AddWidget"


const GameWidgets = (props) => {
    return (
        <div className="pt-10 w-100% bg-gray-50 justify-center space-around text-black pb-10 flex flex-row items-center">
            <div className="flex flex-col ml-2">
                    <div className="mb-2">
                        <h3 className="flex">Halo</h3>
                        <div className="relative">
                            <img src = {HaloInfinite}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"Halo"} deleteWidget = {props.deleteWidget} addWidget = {props.addWidget} widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <h3 className="flex">Assassins Creed</h3>
                        <div className="relative">
                            <img src = {AssassinsCreed}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"AssassinsCreed"}  deleteWidget = {props.deleteWidget} addWidget = {props.addWidget}  widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="flex flex-col ml-2 mr-2">
                    <div className="mb-2">
                        <h3 className="flex">Age Of Empires</h3>
                        <div className="relative">
                            <img src = {AgeOfEmpires}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"AgeOfEmpires"}  deleteWidget = {props.deleteWidget} addWidget = {props.addWidget} widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <h3 className="flex">Gwent</h3>
                        <div className="relative">
                            <img src = {Gwent}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"Gwent"}  deleteWidget = {props.deleteWidget} addWidget = {props.addWidget} widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default GameWidgets