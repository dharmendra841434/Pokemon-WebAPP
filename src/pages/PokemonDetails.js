import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../images/loading.gif";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const PokemonDetails = () => {
  const [loading, setLoading] = useState(false);
  const [SingleData, setSingleData] = useState();
  const [bookmarkState, setBookmarkState] = useState(false);
  const [idExist, setIdExist] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const pokemonName = path.substring(path.lastIndexOf("/") + 1);

  const StoreId = (id) => {
    var existing = localStorage.getItem("bookmarkPk");
    existing = existing ? existing.split(",") : [];
    existing.push(id);
    let uniqueID = [...new Set(existing)];
    localStorage.setItem("bookmarkPk", uniqueID.toString());
    alert("item BookMarked");
  };

  const getSingleDetails = async () => {
    setLoading(true);
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setLoading(false);
        setSingleData(res.data);
        //console.log(res.data);
      });
  };
  let pokemonIds;
  useEffect(() => {
    getSingleDetails();
    pokemonIds = localStorage.getItem("bookmarkPk");
    setIdExist(
      pokemonIds.includes(SingleData ? SingleData.id : null) ? true : false
    );
    console.log(idExist);
  }, []);

  return (
    <div className=" flex flex-col items-center mt-10 ">
      {loading ? (
        <img src={Loading} />
      ) : (
        <div className=" space-y-3 border border-gray-400 px-6 py-3 rounded-md ">
          {idExist ? (
            <button className="" onClick={() => alert("remove")}>
              <FaRegBookmark className=" text-3xl  " />
            </button>
          ) : (
            <button
              className=""
              onMouseOver={() => setBookmarkState(true)}
              onMouseLeave={() => setBookmarkState(false)}
              onClick={() => StoreId(SingleData && SingleData.id)}
            >
              {bookmarkState ? (
                <FaBookmark className=" text-3xl " />
              ) : (
                <FaRegBookmark className=" text-3xl  " />
              )}
            </button>
          )}
          <div className=" w-full flex flex-col items-center space-x-5 mt-3">
            <img
              src={
                SingleData && SingleData.sprites.other.dream_world.front_default
              }
              alt="pokemon"
              className=" w-36 h-32"
            />
            <h1 className=" capitalize mt-6">
              ID :{" "}
              <span className=" text-sm text-gray-600">
                {SingleData && SingleData.id}
              </span>
            </h1>
            <h1 className=" capitalize">
              Name :{" "}
              <span className=" text-sm text-gray-600">
                {SingleData && SingleData.name}
              </span>
            </h1>
            <h1 className=" capitalize">
              Abilities :
              {SingleData &&
                SingleData.abilities.map((item, index) => (
                  <span key={index} className=" gap-3 text-sm text-gray-600">
                    {" "}
                    {item.ability.name},
                  </span>
                ))}
            </h1>
            <h1 className=" capitalize">
              Forams:{" "}
              {SingleData &&
                SingleData.forms.map((item, index) => (
                  <span key={index} className=" text-sm text-gray-600">
                    {item.name}
                  </span>
                ))}
              ,
            </h1>
            <h1 className=" capitalize">
              Height :{" "}
              <span className=" text-sm text-gray-600">
                {SingleData && SingleData.height}
              </span>
            </h1>
            <h1 className=" capitalize">
              Weight :{" "}
              <span className=" text-sm text-gray-600">
                {SingleData && SingleData.weight}
              </span>
            </h1>
          </div>
          <div className=" capitalize ">
            Moves :{" "}
            <div className=" grid grid-cols-2 lg:grid-cols-5">
              {SingleData &&
                SingleData.moves.map((item, index) => (
                  <p className=" text-sm text-gray-600" key={index}>
                    {index + 1} . {item.move.name}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
