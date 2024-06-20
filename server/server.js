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

/*const getPokemonsByID = async (id) => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/${id}"
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
};*/

app.get("/api", async (req, res) => {
  const { limit = 40, offset = 0 } = req.query;
  const data = await getPokemons(limit, offset);
  res.setHeader("Content-Type", "application/json");
  res.json({ data });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
