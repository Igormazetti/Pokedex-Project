import { useContext, useState, useEffect } from "react";
import { Container } from "./styles";
import { PokemonsContext } from "../../context/PokemonsContext";
import PokemonCard from "../PokemonCard/index";

interface pokeInfo {
  name: string;
  url: string;
}

export default function Dashboard() {
  const { pokemons, setVal, val } = useContext(PokemonsContext);
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    val > 0 ? setBtnDisabled(false) : setBtnDisabled(true);
  }, [val]);

  const handleNextBtn = () => {
    setVal(val + 24);
  };

  const handlePrevBtn = () => {
    val > 0 && setVal(val - 24);
  };

  return (
    <Container>
      <div className="title">
        <h3>Pokémons</h3>
      </div>
      <div>
        <div className="card-container">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon: pokeInfo) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))
          ) : (
            <span>Pokémon não encontrado!</span>
          )}
        </div>
      </div>
      {pokemons.length > 23 && (
        <div id="btn-container">
          <button type="button" disabled={btnDisabled} onClick={handlePrevBtn}>
            Prev
          </button>
          <button type="button" onClick={handleNextBtn}>
            Next
          </button>
        </div>
      )}
    </Container>
  );
}
