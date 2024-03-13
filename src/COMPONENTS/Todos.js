import TodoItems from "./TodoItems";
import { memo } from "react";

function Todos({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItems todo={todo} key={index} />
      ))}
    </ul>
  );
}

export default memo(Todos);
