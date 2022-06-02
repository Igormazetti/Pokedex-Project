import { createContext, useEffect, useState, useContext } from "react";
import getPokemons from "../services";

export const PokemonsContext = createContext();

export default function PokemonsProvider({ children }) {
  const [val, setVal] = useState(0);
  const [backupPokemons, setBackupPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getAllPokemons = async () => {
      const info = await getPokemons(val);
      setPokemons(info);
      setBackupPokemons(info);
    };
    getAllPokemons();
  }, [val]);

  const value = {
    pokemons,
    setPokemons,
    setVal,
    val,
    backupPokemons,
  };

  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
}

export const usePokemons = () => {
  const context = useContext(PokemonsContext);

  if (!context) {
    throw new Error("useMap must be used whitin a CustomMapProvider.");
  }

  return context;
};
