import { Link } from "react-router-dom";
import styles from "./CardTodo.module.scss";

function CardTodo({ title, id }) {
  return (
    <Link to={`/todo/${id}`} className={styles.main}>
      <h2 className={styles.title}>{title}</h2>
    </Link>
  );
}

export default CardTodo;
