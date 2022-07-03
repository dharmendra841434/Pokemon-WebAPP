import React from "react";
import pic from "../images/Pokemon.png";
const Home = () => {
  return (
    <>
      <div className=" flex items-center justify-center mt-9">
        <img
          src={pic}
          className=" w-full h-1/2 px-2 md:w-4/5 lg:w-1/3 lg:h-1/3"
          alt="pokemon"
        />
      </div>
    </>
  );
};

export default Home;
