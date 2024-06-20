import { PokemonContext } from "./PokemonContext";
import React, { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({ children }) => {
  const [pokeAPIData, setAPIData] = useState([]);
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

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        pokeAPIData,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
