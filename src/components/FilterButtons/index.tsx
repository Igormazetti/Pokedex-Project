import { usePokemons } from "../../context/PokemonsContext";
import { getPokemons } from "../../services/index";
import { Container } from "./styles";

import React from "react";

const FilterButtons: React.FC = () => {
  const { setPokemons } = usePokemons();
  const getAll = async () => {
    const pokes = await getPokemons(0);
    setPokemons(pokes);
  };
  return (
    <Container>
      <button type="button" onClick={getAll}>
        All
      </button>
    </Container>
  );
};

export default FilterButtons;
