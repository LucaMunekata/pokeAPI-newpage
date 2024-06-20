import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./context/PokemonProvider";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <PokemonProvider>
      <AppRouter></AppRouter>
    </PokemonProvider>
  );
}

export default App;
