import ActiveJobs from "../components/ActiveJobs";
import TotalJobViews from "../components/TotalJobViews";
import MostPopularJob from "../components/MostPopularJob";
import JobCredits from "../components/JobCredits";
import { v4 as uuidv4 } from 'uuid';
import AgeOfEmpires from "../components/AgeOfEmpires";
import Halo from "../components/Halo";
import AssassinsCreed from "../components/AssassinsCreed";
import Gwent from "../components/Gwent";


const GetWidget = (type, deleteWidget, id) => {
    const widgetID = id ? id : uuidv4().toString()
    switch (type) {
        case 'MostPopularJobs':
            let widget1 = {
                id: widgetID,
                header: "Most Popular Jobs",
                body: <MostPopularJob id={id}  deleteWidget={deleteWidget} />
            }
            return widget1
        case 'ActiveJobs':
            let widget2 = {
                id: widgetID,
                header: "Active Jobs",
                body: <ActiveJobs id={id}  deleteWidget={deleteWidget}/>
            }
            return widget2
        case 'JobCredits':
            let widget3 = {
                id: widgetID,
                header: "JobCredits",
                body: <JobCredits id={id}  deleteWidget={deleteWidget} />
            }
            return widget3
        case 'TotalJobViews':
            let widget4 = {
                id: widgetID,
                header: "Total Job Views",
                body: <TotalJobViews id={id}  deleteWidget={deleteWidget} />
            }
            return widget4
        case 'AgeOfEmpires':
            let widget5 = {
                id: widgetID,
                header: "Age of Empires",
                body: <AgeOfEmpires id={id} deleteWidget={deleteWidget} />
            }
            return widget5
        case 'Halo':
            let widget6 = {
                id: widgetID,
                header: "Halo",
                body: <Halo id={id} deleteWidget={deleteWidget} />
            }
            return widget6
        case 'AssassinsCreed':
            let widget7 = {
                id: widgetID,
                header: "Assassins Creed",
                body: <AssassinsCreed id={id} deleteWidget={deleteWidget} />
            }
            return widget7
        case 'Gwent':
            let widget8 = {
                id: widgetID,
                header: "Gwent",
                body: <Gwent id={id} deleteWidget={deleteWidget} />
            }
            return widget8
        default:
            let widget = {
                id: "undefined",
                header: "undefined",
                body: <div>undefined</div>
            }
            return widget
    }
}
export default GetWidget