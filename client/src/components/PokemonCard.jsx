import React from "react";
import { Link } from "react-router-dom";
import {
  nameFormatter,
  idFormatter,
  getRegion,
  toUpperCase,
} from "../helper.js";

export const PokemonCard = (pokemon) => {
  const pokemonID = idFormatter(pokemon.pokemon.id.toString());

  const pokemonName = nameFormatter(pokemon.pokemon.name);
  const upperCase = toUpperCase(pokemonName);

  return (
    <Link
      to={`/pokemon/${pokemon.pokemon.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className="pokemon-img">
        <img
          src={pokemon.pokemon.sprites.other["official-artwork"].front_default}
          alt="pokémon"
        />
      </div>
      <div className="pokemon-info">
        <span className="pokemon-num">{"#" + pokemonID}</span>
        <span className="pokemon-name">{upperCase}</span>
        <div className="pokemon-types">
          {pokemon.pokemon.types.map((type) => (
            <img
              key={type.type.name}
              src={`https://raw.githubusercontent.com/LucaMunekata/pokeAPI-webpage/main/icons/types_icons/${type.type.name}.png`}
              alt={type.type.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};
