import ActiveJobs from "../components/ActiveJobs";
import TotalJobViews from "../components/TotalJobViews";
import MostPopularJob from "../components/MostPopularJob";
import JobCredits from "../components/JobCredits";
import { v4 as uuidv4 } from 'uuid';


const AddWidget = (props)=> {
    const id = uuidv4().toString();
    const position1 = {id: id,order: 4,col: 1,colSpan: 1,rowSpan: 1,}
    const addWidget = () => {
        switch(props.id){
            case 'MostPopularJobs':
                let widget1 ={
                    id:id,
                    header: "Most Popular Jobs",
                    body: <MostPopularJob id={id} deleteWidget={props.deleteWidget}/>
                  }
                  props.addWidget(widget1,position1)
            break;
            case 'ActiveJobs':
                let widget2 ={
                    id:id,
                    header: "Active Jobs",
                    body: <ActiveJobs id={id} deleteWidget={props.deleteWidget}/>
                  }
                  props.addWidget(widget2,position1)
            break;
            case 'JobCredits':
                let widget3 ={
                    id:id,
                    header: "JobCredits",
                    body: <JobCredits id={id} deleteWidget={props.deleteWidget}/>
                  }
                  props.addWidget(widget3,position1)
            break;
            case 'TotalJobViews':
                let widget4 ={
                    id:id,
                    header: "Total Job Views",
                    body: <TotalJobViews id={id} deleteWidget={props.deleteWidget}/>
                  }
                props.addWidget(widget4,position1)
            break
        }
    }
    return (
        <div onClick={() => {addWidget()}}>+</div>
    )
}
export default AddWidget