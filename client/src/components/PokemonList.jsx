import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {
  const { pokeAPIData } = useContext(PokemonContext);
  return (
    <>
      <div className="card-grid">
        {pokeAPIData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
};
