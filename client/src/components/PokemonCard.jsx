import React from "react";
import { Link } from "react-router-dom";
import { nameFormatter, getRegion } from "../helper.js";

export const PokemonCard = (pokemon) => {
  let numToStr = pokemon.pokemon.id.toString();
  const len = numToStr.length;
  for (let j = 0; j < 4 - len; j++) {
    numToStr = "0" + numToStr;
  }

  const pokemonName = nameFormatter(pokemon.pokemon.name);
  const upperCase = pokemonName[0].toUpperCase() + pokemonName.slice(1);

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
        <span className="pokemon-num">{"#" + numToStr}</span>
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
