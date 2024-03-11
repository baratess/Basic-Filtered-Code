import React from "react";
import { useState } from "react";
import "./App.css";
import { data } from "./DATA/data";
function App() {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Ekle</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
