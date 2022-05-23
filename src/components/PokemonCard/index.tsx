import React from "react";
import { Card } from "./styles";
import { Link } from "react-router-dom";

interface Pokemon {
  name: string;
  image: string;
}

export default function PokemonCard({ name, image }: Pokemon) {
  return (
    <div>
      <Card>
        <Link to={`/caracteristicas/${name}`}>
          <img src={image} alt={`imagem de ${name}`} />
        </Link>
        <h4>{name}</h4>
      </Card>
    </div>
  );
}
