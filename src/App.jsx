import './App.css'
import Navbar from './components/Navbar';
import PokemonCard from './components/PokemonCard';
import { useState } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App() {

  const [pokemonIndex, setPokemonIndex]= useState(0);

  return (
  <div>
      <PokemonCard {...pokemonList[pokemonIndex]} />
      <Navbar navigation={[pokemonIndex, setPokemonIndex]} pokemonLength={pokemonList.length}/>
  </div>
  );
}

export default App
