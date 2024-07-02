import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokemonCard } from "../components";
import { useLocation } from "react-router-dom";

export const SearchResultPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  console.log("global:");

  const filteredPokemon = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  console.log("filtered:");
  console.log(filteredPokemon); // Debugging: log the filteredPokemon array

  return (
    <>
      <div className="container">
        <div className="card-grid">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    </>
  );
};
