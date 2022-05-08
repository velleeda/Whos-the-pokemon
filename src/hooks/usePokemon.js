import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

export function usePokemon() {
  const value = useContext(PokemonContext);

  return value;
}
