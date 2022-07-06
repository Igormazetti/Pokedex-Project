import { useState } from "react";
import { Container, Content } from "./styles";
import SearchIcon from "../../assets/search-icon.png";
import Pokeball from "../../assets/openpokeball.png";
import { usePokemons } from "../../context/PokemonsContext";

interface pokeInt {
  name: string;
  url: string;
}

export default function Header() {
  const [pokedex, setPokedex] = useState(false);
  const [pokemonSearch, setPokemonSearch] = useState("");
  const { backupPokemons, setPokemons } = usePokemons();

  const handleSearchBtn = () => {
    const searchpoke = backupPokemons.filter((poke: pokeInt) =>
      poke.name.toLowerCase().includes(pokemonSearch.toLowerCase())
    );
    setPokemons(searchpoke);
    setPokemonSearch("");
  };

  return (
    <Container>
      <Content>
        <div>
          <button type="button" onClick={() => setPokedex(!pokedex)}>
            <img id="poke-image" src={Pokeball} alt="pokeball" />
          </button>
          <h2 className={pokedex ? "animate" : "getback"}>POKEDEX</h2>
        </div>
        <div>
          <label htmlFor="find">
            Busque um Pokémon pelo nome
            <input
              type="text"
              name="find"
              id="find"
              value={pokemonSearch}
              onChange={(e) => setPokemonSearch(e.target.value)}
            />
          </label>
          <button id="searchbtn" type="button" onClick={handleSearchBtn}>
            <img src={SearchIcon} alt="search" />
          </button>
        </div>
      </Content>
    </Container>
  );
}
