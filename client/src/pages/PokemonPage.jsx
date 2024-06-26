import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { Loader } from "../components";
import { renderDivs } from "../customDivs";
import {
  idFormatter,
  nameFormatter,
  toUpperCase,
  getRegion,
  getChain,
  evolutionCount,
} from "../helper";

export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);
  const { getSpecies } = useContext(PokemonContext);
  const { getEvolutionChain } = useContext(PokemonContext);
  const { getEvolutionSprite } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const [species, setSpecies] = useState({});
  const [evolutionChain, setEvolutionChain] = useState({});
  const [evolutionSprite, setEvolutionSprite] = useState({});
  const [imgSrc, setImgSrc] = useState("");

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setImgSrc(data.data.sprites.other["official-artwork"].front_default);
    setLoading(false);
  };

  const fetchPokemonSpecies = async (id) => {
    const data = await getSpecies(id);
    setSpecies(data);
    setLoading2(false);
  };

  const fetchEvolutionChain = async (chain) => {
    const data = await getEvolutionChain(chain);
    setEvolutionChain(data);
    setLoading3(false);
  };

  console.log(evolutionSprite);

  const fetchEvolutionSprite = async (names) => {
    const sprites = {};
    let i = 1;
    for (const name of names) {
      if (name) {
        const data = await getEvolutionSprite(name);
        sprites[`e${i}`] = data.data;
      }
      i++;
    }
    setEvolutionSprite(sprites);
    setLoading4(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  useEffect(() => {
    fetchPokemonSpecies(id);
  }, [id]);

  useEffect(() => {
    let url = loading2 ? undefined : species.data.evolution_chain.url;
    let chain;
    if (url) {
      chain = getChain(url);
      fetchEvolutionChain(chain);
    }
  }, [loading2, species]);

  useEffect(() => {
    const fetchSprites = async () => {
      if (!loading3) {
        const names = [
          evolutionChain.data.chain.species.name,
          evolutionChain.data.chain.evolves_to[0]?.species.name,
          evolutionChain.data.chain.evolves_to[0]?.evolves_to[0]?.species.name,
          evolutionChain.data.chain.evolves_to[0]?.evolves_to[1]?.species.name,
          evolutionChain.data.chain.evolves_to[1]?.species.name,
          evolutionChain.data.chain.evolves_to[1]?.evolves_to[0]?.species.name,
          evolutionChain.data.chain.evolves_to[2]?.species.name,
          evolutionChain.data.chain.evolves_to[3]?.species.name,
          evolutionChain.data.chain.evolves_to[4]?.species.name,
          evolutionChain.data.chain.evolves_to[5]?.species.name,
          evolutionChain.data.chain.evolves_to[6]?.species.name,
          evolutionChain.data.chain.evolves_to[7]?.species.name,
        ].filter(Boolean);
        fetchEvolutionSprite(names);
      }
    };
    fetchSprites();
  }, [loading3, evolutionChain]);

  const handleMouseEnter = () => {
    setImgSrc(pokemon.data.sprites.other["official-artwork"].front_shiny);
  };

  const handleMouseLeave = () => {
    setImgSrc(pokemon.data.sprites.other["official-artwork"].front_default);
  };

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="main-pokemon-page">
            <span className="pokemon-page-name">
              {toUpperCase(nameFormatter(pokemon.data.name))}
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
            <div className="pokemon-page-types">
              {pokemon.data.types.map((type) => (
                <img
                  key={type.type.name}
                  src={`https://raw.githubusercontent.com/LucaMunekata/pokeAPI-webpage/main/icons/types_icons/${type.type.name}.png`}
                  alt={type.type.name}
                />
              ))}
            </div>
            <div className="pokemon-page-region">
              <span> Region: {getRegion(pokemon.data.id)}</span>
            </div>
            <div className="pokemon-page-height">
              <span> Height: {pokemon.data.height / 10}m</span>
            </div>
            <div className="pokemon-page-weight">
              <span> Weight: {pokemon.data.weight / 10}kg</span>
            </div>
            {loading3 ? (
              <Loader />
            ) : (
              <>
                <div className="evolution-chain">
                  <span className="evolution-chain-text">Evolution Chain</span>
                </div>
                <div className="pokemon-page-evolution-chain">
                  {loading4 ? (
                    <Loader />
                  ) : (
                    <>
                      {renderDivs(
                        evolutionCount(evolutionChain.data.chain),
                        evolutionSprite
                      )}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
