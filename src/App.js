import React from "react";
import { useReducer, useEffect, useState, useCallback, useMemo } from "react";
import "./App.css";
import { Data } from "./DATA/data";
import reducer from "./COMPONENTS/Reducer";
import AddToDo from "./COMPONENTS/AddTodo";
import Todos from "./COMPONENTS/Todos";

function App() {
  const [data1, setData1] = useState([]);
  const data0 = Data.find((item) => item.topic === data1[0]);
  console.log(data0);

  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
    search: "",
  });

  useEffect(() => {
    setData1(state.todos);
  }, [state.todos]);

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);
  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };
  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo.toLowerCase("TR").includes(state.search.toLowerCase("TR"))
    );
  }, [state.todos, state.search]);
  return (
    <>
      <AddToDo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      />
      <hr />
      <input
        type="text"
        value={state.search}
        placeholder="ara"
        onChange={searchHandle}
      />
      <Todos todos={filteredTodos} />
    </>
  );
}

export default App;
