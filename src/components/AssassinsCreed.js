import AssassinsCreedImage from "../assets/JobWidgets/assassinsCreed.jpg"

const AssassinsCreed = props => {
    return (
      <div className="flex justify-center">
            <div className="absolute h-5 w-5 mt-0 top-0 right-0 mr-0 self-end bg-blue-300 flex justify-center rounded-full">
              <a href="#" onClick={() => props.deleteWidget(props.id)} >X</a>
            </div>
          <img className=" w-96" src = {AssassinsCreedImage}/>
      </div>
    );
  };
  
  export default AssassinsCreed;