import Head from "next/head";

import PokemonInScreen from "../components/PokemonInScreen";
import Level from "../components/Level";

import styles from "./home.module.scss";

import { PokemonContextProvider } from "../contexts/PokemonContext";

export default function Home() {
  return (
    <PokemonContextProvider>
      <Head>
        <title>Who's the pokemon?</title>
      </Head>
      <div className={styles.Wrapper}>
        <Level />
        <PokemonInScreen />
      </div>
    </PokemonContextProvider>
  );
}
