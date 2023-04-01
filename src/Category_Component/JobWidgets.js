import ActiveJobs from "../components/ActiveJobs"
import MostPopularJob from "../components/ActiveJobs"
import JobCreditsImage from "../assets/JobWidgets/JobCreditsWidget.PNG"
import MostPopularJobImage from "../assets/JobWidgets/MostPopularJob.PNG"
import ActiveJobImage from "../assets/JobWidgets/ActiveJobWidgets.PNG"
import TotalJobViewsImage from "../assets/JobWidgets/TotalJobViewsWidget.PNG"
import AddWidget from "../crud_components/AddWidget"

const JobWidget = (props) => {
    return (
        <div className="pt-10 w-100% bg-gray-50 justify-center space-around text-black pb-10 flex flex-row items-center">
            <div className="flex flex-col ml-2">
                    <div className="mb-2">
                        <h3 className="flex">JobCredits</h3>
                        <div className="relative">
                            <img src = {JobCreditsImage}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"JobCredits"} deleteWidget = {props.deleteWidget} addWidget = {props.addWidget} widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <h3 className="flex">Most Popular Job</h3>
                        <div className="relative">
                            <img src = {MostPopularJobImage}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"MostPopularJobs"} deleteWidget = {props.deleteWidget} addWidget = {props.addWidget}  widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="flex flex-col ml-2 mr-2">
                    <div className="mb-2">
                        <h3 className="flex">Active Jobs</h3>
                        <div className="relative">
                            <img src = {ActiveJobImage}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"ActiveJobs"} deleteWidget = {props.deleteWidget} addWidget = {props.addWidget} widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
                    <div className="mb-2">
                        <h3 className="flex">Job Credits</h3>
                        <div className="relative">
                            <img src = {TotalJobViewsImage}/>
                            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-300 rounded-full flex justify-center items-center">
                                <a href="#"><AddWidget type={"TotalJobViews"} deleteWidget = {props.deleteWidget} addWidget = {props.addWidget} widgets = {props.widgets} storePositionsToLocalStorage = {props.storePositionsToLocalStorage} positions = {props.positions}/></a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default JobWidget