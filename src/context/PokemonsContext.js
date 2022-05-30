import { createContext, useEffect, useState } from "react";
import getPokemons from "../services";

export const PokemonsContext = createContext();

export default function PokemonsProvider({ children }) {
  const [val, setVal] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      const info = await getPokemons(val);
      console.log(info);
      setPokemons(info);
    };
    getAllPokemons();
  }, [val]);

  const value = {
    pokemons,
    setPokemons,
    setVal,
    val,
  };

  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
}
