import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { Loader } from "../components";
import { idFormatter, nameFormatter, toUpperCase } from "../helper";

export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [imgSrc, setImgSrc] = useState("");

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setImgSrc(data.data.sprites.other["official-artwork"].front_default);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  const handleMouseEnter = () => {
    setImgSrc(pokemon.data.sprites.other["official-artwork"].front_shiny);
  };

  const handleMouseLeave = () => {
    setImgSrc(pokemon.data.sprites.other["official-artwork"].front_default);
  };

  return (
    <>
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="main-pokemon-page">
              <span className="pokemon-page-name">
                {nameFormatter(toUpperCase(pokemon.data.name))}
              </span>
              <span className="pokemon-page-number">
                #{idFormatter(pokemon.data.id.toString())}
              </span>
              <div className="pokemon-page-img">
                <img
                  src={imgSrc}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                ></img>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
