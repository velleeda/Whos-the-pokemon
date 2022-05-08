import { usePokemon } from "../../hooks/usePokemon";

import styles from "./styles.module.scss";

export default function PokemonInScreen() {
  const {
    loading,
    error,
    noTries,
    answer,
    setAnswer,
    pokemonName,
    pokemonImage,
    handleCheckPokemon,
    handleEnterKeyPressed,
    handleFirstLoading,
  } = usePokemon();

  return (
    <>
      {loading ? (
        <div className={styles.StartScreen}>
          <h1>Who's the pokémon?</h1>
          <button onClick={handleFirstLoading}>Play</button>
        </div>
      ) : (
        <>
          {pokemonImage != undefined && pokemonName != undefined ? (
            <div className={styles.InGameScreen}>
              <img src={pokemonImage} />
              <input
                disabled={noTries}
                value={answer}
                onChange={(event) => {
                  setAnswer(event.target.value.toLowerCase());
                }}
                onSubmit={(event) => handleCheckPokemon(event)}
                onKeyPress={(event) => handleEnterKeyPressed(event)}
                placeholder="Type in the pokémon"
              />
              {error != "" && (
                <div className={styles.Error}>
                  <p>{error}</p>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.LoadingScreen}>
              <img src="/gifs/loading-buffering.gif" />
              <p>Loading</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
