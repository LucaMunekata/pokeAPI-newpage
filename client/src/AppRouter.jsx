import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import { HomePage, PokemonPage, SearchResultPage } from "./pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header></Header>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="pokemon/:id" element={<PokemonPage></PokemonPage>}></Route>
        <Route
          path="search"
          element={<SearchResultPage></SearchResultPage>}
        ></Route>
      </Route>
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
