import axios from "axios";
import React, { useState } from "react";

const SearchPage = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(false);

  const GetPokemon = async () => {
    if (pokemonName === "") {
      alert("Please Enter Pokemon Name");
    } else {
      try {
        setLoading(true);
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((res) => {
            setLoading(false);
            setPokemonData(res.data);
            //console.log(pokemonData);
            setPokemonName("");
          });
      } catch (error) {
        setLoading(false);
        setErrorMsg("Result Not Found!!");
      }
    }
  };

  return (
    <div className="  flex flex-col items-center space-y-10 pt-10">
      <h1 className=" text-4xl font-bold capitalize">Search Pokemon</h1>
      <div>
        <input
          className={` outline-none  border-2 border-gray-400`}
          placeholder=" Enter Pokemon Name"
          value={pokemonName}
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <button
          onClick={GetPokemon}
          className=" bg-yellow-500 py-1 ml-6 px-4 text-white rounded"
        >
          Search
        </button>
        <div className=" py-6 px-6 flex flex-col justify-center items-center border-[1px] border-gray-400 mt-20">
          {loading ? (
            <h1>Loading.....</h1>
          ) : (
            <div>
              {pokemonData ? (
                <div>
                  <h1 className=" text-3xl text-orange-500 capitalize">
                    Name : {pokemonData.forms[0].name}
                  </h1>
                  <h1 className=" text-3xl text-orange-500 capitalize">
                    Weight : {pokemonData.weight}
                  </h1>
                </div>
              ) : errorMsg === "" ? (
                "Result Show Here"
              ) : (
                errorMsg
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
