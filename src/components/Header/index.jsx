import React, { useState } from "react";
import { Container, Content } from "./styles";
import SearchIcon from "../../assets/search-icon.png";
import Pokeball from "../../assets/openpokeball.png";

export default function Header() {
  const [pokedex, setPokedex] = useState(false);

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
            <input type="text" name="find" id="find" />
          </label>
          <button id="searchbtn" type="button">
            <img src={SearchIcon} alt="search" />
          </button>
        </div>
      </Content>
    </Container>
  );
}
