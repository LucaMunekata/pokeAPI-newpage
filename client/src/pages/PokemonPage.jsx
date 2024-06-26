import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { Loader } from "../components";
import {
  idFormatter,
  nameFormatter,
  toUpperCase,
  getRegion,
  getChain,
  evolutionCount,
  divStyle,
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
        sprites[`e${i}`] = data.data.sprites;
      }
      i++;
    }
    setEvolutionSprite(sprites);
    setLoading4(false);
  };

  const renderDivs = (count, sprite, sprite2, sprite3) => {
    if (count === 1) {
      if (!sprite) return null;
      else
        return (
          <>
            <div
              className="pokemon-evolution-img"
              style={{ height: "9.766vw", width: "9.766vw" }}
            >
              <img src={sprite.other["official-artwork"].front_default}></img>
            </div>
          </>
        );
    } else if (count === 2) {
      if (!sprite || !sprite2) return null;
      else
        return (
          <>
            <div
              className="pokemon-evolution-img"
              style={{ left: "6.170vw", height: "9.766vw", width: "9.766vw" }}
            >
              <img src={sprite.other["official-artwork"].front_default}></img>
            </div>
            <p class="arrow right"></p>
            <div
              className="pokemon-evolution-img"
              style={{ left: "22.106vw", height: "9.766vw", width: "9.766vw" }}
            >
              <img src={sprite2.other["official-artwork"].front_default}></img>
            </div>
          </>
        );
    } else if (count === 3) {
      if (!sprite || !sprite2 || !sprite3) return null;
      else
        return (
          <>
            <div
              className="pokemon-evolution-img"
              style={{ left: "2.186vw", height: "9.766vw", width: "9.766vw" }}
            >
              <img src={sprite.other["official-artwork"].front_default}></img>
            </div>
            <p className="arrow right" style={{ left: "32.66%" }}></p>
            <div
              className="pokemon-evolution-img"
              style={{ left: "14.138vw", height: "9.766vw", width: "9.766vw" }}
            >
              <img src={sprite2.other["official-artwork"].front_default}></img>
            </div>
            <p className="arrow right" style={{ left: `64.33%` }}></p>
            <div
              className="pokemon-evolution-img"
              style={{ left: "26.090vw", height: "9.766vw", width: "9.766vw" }}
            >
              <img src={sprite3.other["official-artwork"].front_default}></img>
            </div>
          </>
        );
    }
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  useEffect(() => {
    fetchPokemonSpecies(id);
  }, []);

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
                <div className="pokemon-page-evolution-chain">
                  {loading4 ? (
                    <Loader />
                  ) : (
                    <>
                      {renderDivs(
                        evolutionCount(evolutionChain.data.chain),
                        evolutionSprite["e1"],
                        evolutionSprite["e2"],
                        evolutionSprite["e3"]
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
