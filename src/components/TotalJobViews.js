const jobViews = [
  {
    id: 1,
    job: "Full-Stack Developer",
    views: 150,
  },
  {
    id: 2,
    job: "Mobile Android Developer",
    views: 25,
  },
  {
    id: 3,
    job: "JavaScript Developer",
    views: 69,
  },
  {
    id: 4,
    job: "Python Developer",
    views: 45,
  },
];

//mapping out each job within object to be displayed on template
const TotalJobViews = (props) => {
  return (
    <div>
      <div className="absolute h-5 w-5 mt-0 top-0 right-0 mr-0 self-end bg-blue-300 flex justify-center rounded-full">
        <a href="#" onClick={() => props.deleteWidget(props.id)}>
          X
        </a>
      </div>
      <div>
        <ul className="grid grid-cols-2 gap-8 p-0">
          {jobViews.map((job) => {
            return (
              <li className="flex-row" key={job.id}>
                <span className="mb-4 font-medium block">{job.job}</span>
                <div className="text-xl w-32 h-32 border-2 mt-auto border-indigo-600 rounded-full flex justify-center items-center bg-blue-200">
                  <span className="flex-end ">{job.views}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TotalJobViews;
