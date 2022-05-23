import { useEffect, useState } from "react";
import { Card } from "./styles";
import { Link } from "react-router-dom";
import { getPokemonDetails } from "../../services";

interface Pokemon {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: Pokemon) {
  const [pokeImg, setPokeImg] = useState("");
  useEffect(() => {
    const getData = async () => {
      const info = await getPokemonDetails(url);
      setPokeImg(info.sprites.front_default);
    };
    getData();
  }, []);

  return (
    <div>
      <Card>
        <Link to={`/caracteristicas/${name}`}>
          <img src={pokeImg} alt={`imagem de ${name}`} />
        </Link>
        <h4>{name}</h4>
      </Card>
    </div>
  );
}
