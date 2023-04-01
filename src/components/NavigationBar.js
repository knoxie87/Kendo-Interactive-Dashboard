import { useState } from "react";
import JobWidget from "../Category_Component/JobWidgets"
import GameWidgets from "../Category_Component/GameWidgets"
const NavigationBar = props => {
  const [displayJobWidgets, setDisplayJobWidgets] = useState(false)
  const [displayWeatherWidgets, setWeatherWidgets] = useState(false)
  const [displayGameWidgets, setGameWidgets] = useState(false)
  const [displayNav, setNavbar] = useState(false)
  {
    return (
      <div className="flex w-fit items-start">
        {!displayNav ?
          <div className=" min-h-screen md:flex">
            <div className="bg-blue-800 text-blue-100 w-64 space-y-6 py-7">
              <a className="text-white flex items-center space-x-2 px-4">
                <span className="text-2xl font-extrabold">Widgets</span>
              </a>
              <nav>

                <div className="">
                  <a href="#" className="block w-full flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white " onClick={() => setDisplayJobWidgets(s => !s)}>Job Widgets
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                  </a>
                </div>
                {displayJobWidgets ?
                  <JobWidget addWidget={props.addWidget} deleteWidget={props.deleteWidget} storePositions={props.storePositions} widgets={props.widgets} positions={props.positions} />
                  : null}

                <div className="">
                  <a href="#" className="block w-full flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white " onClick={() => setGameWidgets(s => !s)}>Game Widgets
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                  </a>
                </div>
                {displayGameWidgets ?
                  <GameWidgets addWidget={props.addWidget} deleteWidget={props.deleteWidget} storePositions={props.storePositions} widgets={props.widgets} positions={props.positions} />
                  : null}

              </nav>

            </div>
          </div>

          : null}
        <button className="items-baseline w-7 pb-3 bg-cyan-500" onClick={() => setNavbar(s => !s)}>
          <div class="w-7 pb-3 mt-5">

            {!displayNav ?
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>

              :
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>}

          </div>

        </button>
      </div>
    );
  }

}

export default NavigationBar;