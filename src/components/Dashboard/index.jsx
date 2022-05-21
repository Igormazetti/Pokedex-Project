import React, { useContext } from "react";
import { Container } from "./styles";
import { PokemonsContext } from "../../context/PokemonsContext";

export default function Dashboard() {
  const { pokemons, setPokemons, setVal } = useContext(PokemonsContext);
  return (
    <Container>
      <div className="title">
        <h3>Pokémons</h3>
      </div>
    </Container>
  );
}
