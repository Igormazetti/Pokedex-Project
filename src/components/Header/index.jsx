import React from "react";
import { Container, Content } from "./styles";
import SearchIcon from "../../assets/search-icon.png";

export default function Header() {
  return (
    <Container>
      <Content>
        <h2>POKEDEX</h2>
        <div>
          <label htmlFor="find">
            Busque um Pokémon pelo nome
            <input type="text" name="find" id="find" />
          </label>
          <button type="button">
            <img src={SearchIcon} alt="search" />
          </button>
        </div>
      </Content>
    </Container>
  );
}
