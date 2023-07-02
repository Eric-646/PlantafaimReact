import styles from "./CardFruit.module.scss";

function CardFruit({ fruit }) {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{fruit}</h2>
    </div>
  );
}

export default CardFruit;
