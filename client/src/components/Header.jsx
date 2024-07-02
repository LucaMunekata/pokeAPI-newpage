import React, { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const Header = () => {
  const { valueSearch, onInputChange, onResetForm } =
    useContext(PokemonContext);

  const nav = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    nav("/search", {
      state: valueSearch,
    });
    onResetForm();
  };

  console.log("valueSearch:", valueSearch);

  return (
    <>
      <nav
        className="navbar navbar-light bg-light justify-content-between"
        style={{ position: "fixed" }}
      >
        <a href="/" className="navbar-brand" style={{ paddingLeft: "100px" }}>
          <img
            className="pokedex-logo"
            src="https://raw.githubusercontent.com/LucaMunekata/pokeAPI-webpage/main/icons/pokedex.png"
          ></img>
        </a>
        <form
          onSubmit={onSearchSubmit}
          className="form-inline d-flex"
          style={{ paddingRight: "100px" }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            id=""
            name="valueSearch"
            value={valueSearch}
            onChange={onInputChange}
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
