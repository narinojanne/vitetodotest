import { useState } from "react";
import "./App.css";
import TodoTable from "./TodoTable";
import React from "react";
import { Todo } from "./Types";

function App() {
  const [todo, setTodo] = useState<Todo>({ desc: "", date: "" });
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ desc: "", date: "" });
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <div className="App">
      <h3>My Todolist</h3>
      <input
        type="text"
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <input
        type="text"
        placeholder="Description"
        name="desc"
        value={todo.desc}
        onChange={inputChanged}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearAllTodos}>Clear All Todos</button>
      <TodoTable todos={todos} />
    </div>
  );
}

export default App;
