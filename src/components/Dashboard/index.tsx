import React, { useContext } from "react";
import { Container } from "./styles";
import { PokemonsContext } from "../../context/PokemonsContext";
import PokemonCard from "../PokemonCard/index";

interface pokeInfo {
  name: string;
  url: string;
}

export default function Dashboard() {
  const { pokemons, setPokemons, setVal } = useContext(PokemonsContext);
  return (
    <Container>
      <div className="title">
        <h3>Pokémons</h3>
      </div>
      <div>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon: pokeInfo) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))
        ) : (
          <span>Aguarde . . .</span>
        )}
      </div>
    </Container>
  );
}
