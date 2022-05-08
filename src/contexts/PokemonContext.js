import { createContext, useEffect, useState } from "react";

import api from "../services/api";

export const PokemonContext = createContext();

export function PokemonContextProvider(props) {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonImage, setPokemonImage] = useState();
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(Math.ceil(Math.random() * 10));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [points, setPoints] = useState(0);
  const [tries, setTries] = useState(3);
  const [level, setLevel] = useState(0);
  const [noTries, setNoTries] = useState(false);

  const handleFirstLoading = () => {
    api
      .getPokemonByName(count)
      .then((response) => {
        setPokemonImage(response.sprites.front_default);
        setPokemonName(response.forms[0].name);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const handleCheckPokemon = (event) => {
    event.preventDefault();

    if (answer == pokemonName) {
      setCount(count + Math.ceil(Math.random() * 10));
      setPoints(points + 10);
      setLevel(level + 1);

      api.getPokemonByName(count).then((response) => {
        setPokemonImage(response.sprites.front_default);
        setPokemonName(response.forms[0].name);
      });

      setError("");
    } else if (tries == 0) {
      setNoTries(true);
    } else {
      setTries(tries - 1);
      console.log(tries);
      setError(`You made a mistake and lost an attempt!`);
    }
    setAnswer("");
  };

  const handleEnterKeyPressed = (event) => {
    var enterCharCode = event.charCode;

    if (enterCharCode == 13) {
      handleCheckPokemon(event);
      return;
    } else {
      return;
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        loading,
        error,
        points,
        tries,
        level,
        noTries,
        pokemonName,
        pokemonImage,
        answer,
        setAnswer,
        handleCheckPokemon,
        handleEnterKeyPressed,
        handleFirstLoading,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
}
