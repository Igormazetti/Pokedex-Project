import React, { useContext } from "react";
import { Container } from "./styles";
import { PokemonsContext } from "../../context/PokemonsContext";
import PokemonCard from "../PokemonCard/index";

export default function Dashboard() {
  const { pokemons, setPokemons, setVal } = useContext(PokemonsContext);
  return (
    <Container>
      <div className="title">
        <h3>Pokémons</h3>
      </div>
      <div>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCard name={pokemon.name} image={pokemon.url} />
          ))
        ) : (
          <span>Aguarde . . .</span>
        )}
      </div>
    </Container>
  );
}
