import React from "react";
import { Todo, TodoTableProps } from "./Types";

export default function TodoTable(props: TodoTableProps) {
  return (
    <div>
      <table id="todotable">
        <tbody>
          {props.todos.map((todo: Todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
