import styles from "./Home.module.scss";
import Title from "components/Title/Title";
import React, { useEffect, useState } from "react";
import CardTodo from "components/CardTodo/CardTodo";
import { getTodos } from "api/Todos";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodosLoad() {
      const todos = await getTodos();
      setTodos(todos);
    }
    getTodosLoad();
  }, []);

  return (
    <div className={styles.main}>
      <Title text={`Page d'acceuil`} />
      <div class={styles.grid}>
        {todos.map((todo, index) => (
          <CardTodo title={todo.title} id={todo.id} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
