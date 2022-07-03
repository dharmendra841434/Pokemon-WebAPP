import React from "react";
import Routing from "./routes/Routing";
import { Link, useLocation } from "react-router-dom";

const menu = [
  {
    title: "All pokemon",
    path: "/all-List",
  },
  {
    title: "Search Pokemon",
    path: "/search",
  },
  {
    title: "Bookmark",
    path: "/bookmark",
  },
];

const App = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <div className=" flex justify-center space-x-3 lg:space-x-12 mt-10 ">
        {menu &&
          menu.length > 0 &&
          menu.map((item, index) => (
            <Link to={item.path} key={index}>
              <button
                className={` transition-all duration-300 ease-in-out ${
                  item.path === path || path.includes(item.path)
                    ? "bg-orange-400 text-white"
                    : ""
                }  hover:bg-orange-400 hover:text-white border-[2px] border-gray-400 px-3 py-1 rounded-md`}
              >
                {item.title}
              </button>
            </Link>
          ))}
      </div>
      <Routing />
    </>
  );
};

export default App;
