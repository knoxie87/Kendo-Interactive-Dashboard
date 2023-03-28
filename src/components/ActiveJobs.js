const ActiveJobs = props => {
    return (
      <div className="h-full">
            <div className="absolute h-5 w-5 mt-0 top-0 right-0 mr-0 self-end bg-blue-300 flex justify-center rounded-full">
              <a href="#" onClick={() => props.deleteWidget(props.id)} >X</a>
            </div>
        <div className="flex justify-center relative">
          <div className="text-xl w-20 h-20 border-2 border-yellow-600 rounded-full flex justify-center items-center bg-green-200">
            <span className="activeJobsNum">5</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActiveJobs;