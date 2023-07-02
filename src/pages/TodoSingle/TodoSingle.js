import { getTodoById } from "api/Todos";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import styles from "./TodoSingle.module.scss";
import { useParams } from "react-router-dom";

function TodoSingle() {
  const [todo, setTodo] = useState([]);
  const { todoId } = useParams();

  useEffect(() => {
    async function getTodoLoadById(todoId) {
      const todo = await getTodoById(todoId);
      setTodo(todo);
    }
    getTodoLoadById(todoId);
  }, [todoId]);

  return (
    <div className={styles.main}>
      <Title text={todo.title} icon={true} />
      {todo.completed ? <p>Terminé</p> : <p>En cours</p>}
      
    </div>
  );
}

export default TodoSingle;
