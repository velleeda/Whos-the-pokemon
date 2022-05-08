import { usePokemon } from "../../hooks/usePokemon";

import styles from "./styles.module.scss";

export default function Level() {
  const { loading, level, points, tries } = usePokemon();
  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className={styles.Box}>
          <div className={styles.LevelBox}>
            <p>Level: {level}</p>
          </div>
          <div className={styles.PointsBox}>
            <p>Points: {points}</p>
          </div>
          <div className={styles.TriesBox}>
            <p>Tries: {tries}</p>
          </div>
        </div>
      )}
    </>
  );
}
