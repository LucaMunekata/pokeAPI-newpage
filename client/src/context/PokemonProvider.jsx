import { PokemonContext } from "./PokemonContext";
import React, { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {
  const [pokeAPIData, setAPIData] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  const getData = async (limit = 40) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api?limit=${limit}&offset=${offset}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const promises = data.data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const results = await Promise.all(promises);

      setAPIData([...pokeAPIData, ...results]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const getGlobalPokemons = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/all?limit=${100000}&offset=${0}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const promises = data.data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });
      const results = await Promise.all(promises);

      setGlobalPokemons(results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const getPokemonByID = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSpecies = async (species) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/species/${species}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getEvolutionChain = async (chain) => {
    try {
      const response = await fetch(`http://localhost:5000/api/chain/${chain}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getEvolutionSprite = async (name) => {
    try {
      const response = await fetch(`http://localhost:5000/api/sprite/${name}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, [offset]);

  const loadMore = () => {
    setOffset(offset + 40);
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        pokeAPIData,
        globalPokemons,
        loadMore,
        getPokemonByID,
        getSpecies,
        getEvolutionChain,
        getEvolutionSprite,
        loading,
        setLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
