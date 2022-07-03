import React from "react";
import { Routes, Route } from "react-router-dom";
import AllList from "../pages/AllList";
import Bookmark from "../pages/Bookmark";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";
import SearchPage from "../pages/SearchPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/all-List" element={<AllList />} />
      <Route path="/all-List/:name" element={<PokemonDetails />} />
    </Routes>
  );
};

export default Routing;
