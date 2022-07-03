import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemon }) => {
  const { id, img, type } = pokemon;
  const name = pokemon.name.toUpperCase();

  return (
    <>
      <Link to={`/all-List/${pokemon.name}`}>
        <div
          className={` transition-all duration-300 ${
            id % 2 ? "bg-red-200" : "bg-green-200"
          } ease-out hover:scale-105 rounded-md px-8 py-4 border border-gray-200 mt-4 cursor-pointer`}
        >
          <figure>
            <img src={img} alt={name} title={name} />
          </figure>
          <div>
            <strong>{name}</strong>
          </div>
          <div>
            <em>{type}</em>
          </div>
        </div>
      </Link>
    </>
  );
};

export { PokemonList };
