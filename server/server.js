const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const getPokemons = async (limit, offset) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed to fetch data" };
  }
};

const getPokemonsByID = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed to fetch data" };
  }
};

const getSpecies = async (id) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed to fetch data" };
  }
};

const getEvolutionChain = async (chain) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${chain}/`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed to fetch data" };
  }
};

const getEvolutionSprite = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed to fetch data" };
  }
};

app.get("/api", async (req, res) => {
  const { limit = 40, offset = 0 } = req.query;
  const data = await getPokemons(limit, offset);
  res.setHeader("Content-Type", "application/json");
  res.json({ data });
});

app.get("/api/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getPokemonsByID(id);
  res.setHeader("Content-Type", "application/json");
  res.json({ data });
});

app.get("/api/species/:species", async (req, res) => {
  const { species } = req.params;
  const data = await getSpecies(species);
  res.setHeader("Content-Type", "application/json");
  res.json({ data });
});

app.get("/api/chain/:chain", async (req, res) => {
  const { chain } = req.params;
  const data = await getEvolutionChain(chain);
  res.setHeader("Content-Type", "application/json");
  res.json({ data });
});

app.get("/api/sprite/:name", async (req, res) => {
  const { name } = req.params;
  const data = await getEvolutionSprite(name);
  res.setHeader("Content-Type", "application/json");
  res.json({ data });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
