import Title from "components/Title/Title";
import styles from "./Home.module.scss";
import { useState } from "react";
import CardFruit from "components/CardFruit/CardFruit";

function Home() {
  const [fruits, setFruits] = useState([
    "banane",
    "pomme",
    "poire",
    "fraise",
    "framboise",
    "mangue",
  ]);
  const addFruit = (fruit) => {
    setFruits([...fruits, fruit]);
  }
  return (
    <div className={styles.main}>
      <Title text={`Page d'acceuil`} />

      <button onClick={() => addFruit('Kiwi')}>Kiwi</button>

      <div class={styles.grid}>
        {fruits.map((fruit, index) => (
          <CardFruit fruit={fruit} key={index} />
        ))}
      </div>
     
    </div>
  );
}

export default Home;
