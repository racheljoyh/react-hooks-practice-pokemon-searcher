import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const pokemonToDisplay = pokemon.filter((onePokemon) => {
    return onePokemon.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  function handleAddPoke(newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((r) => r.json())
      .then((pokemon) => setPokemon(pokemon));
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPoke={handleAddPoke} />
      <br />
      <Search onSearchQuery={searchQuery} onChangeSearch={setSearchQuery} />
      <br />
      <PokemonCollection pokemon={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
