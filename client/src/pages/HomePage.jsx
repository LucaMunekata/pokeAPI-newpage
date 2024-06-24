import React, { useContext } from "react";
import { FilterBar, PokemonList } from "../components/";
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {
  const { loadMore } = useContext(PokemonContext);

  return (
    <>
      <div className="container">
        <FilterBar></FilterBar>
        <PokemonList></PokemonList>
        <div className="button-container">
          <button className="load-button" onClick={loadMore}>
            Load more Pokémon
          </button>
        </div>
      </div>
    </>
  );
};
