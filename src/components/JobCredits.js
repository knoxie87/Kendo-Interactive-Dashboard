const JobCredits = props => {
    return (
      <div className="flex justify-center">
            <div className="absolute h-5 w-5 mt-0 top-0 right-0 mr-0 self-end bg-blue-300 flex justify-center rounded-full">
              <a href="#" onClick={() => props.deleteWidget(props.id)} >X</a>
            </div>
        <div className="text-xl md:w-20 h-20 rounded-full flex border-2 border-red-400 items-center justify-center just bg-pink-200">
          <span className="jobCreditsNum">850</span>
        </div>
      </div>
    );
  };
  
  export default JobCredits;