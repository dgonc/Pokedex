import "./styles/app.css";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";
import { useEffect, useState } from "react";

const pokemonList = [
  {
    id: 1,
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 2,
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 3,
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 4,
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: 5,
    name: "mew",
  },
];

function App() {
  useEffect(() => alert("Hello pokemon trainer :)"), []);

  const [pokemonIndex, setPokemonIndex] = useState(0);
  console.log("index dans Apps", pokemonIndex);

  return (
    <div className="card">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <Navbar setPokemonIndex={setPokemonIndex} poke={pokemonList} />
    </div>
  );
}

export default App;
