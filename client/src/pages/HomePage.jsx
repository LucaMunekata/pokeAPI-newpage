import React from "react";
import { FilterBar, PokemonList } from "../components/";

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <FilterBar></FilterBar>
        <PokemonList></PokemonList>
      </div>
      <div className="teste"></div>
    </>
  );
};
