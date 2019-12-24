import React, { useState } from "react";
import shortid from "shortid";
import TodoView from "./TodoView";

export function TodoForm() {
  // Fields State
  const [todoField, setTodoField] = useState("");

  // An array to store the todo list
  const [todos, setTodos] = useState([]);

  // Function to update the field state
  const handleTodoFieldOnChange = e => {
    setTodoField(e.target.value);
  };

  // Function to add todo into the todo list
  const addTodo = todo => {
    // Append a new todo in front of the todos array
    // - todo is new value
    // - ...todoField is todos array
    setTodos([todo, ...todos]);
  };

  // Submit function
  const handleOnSubmit = e => {
    // Prevent reload the form
    e.preventDefault();

    // Call the addTodo function to add the value
    addTodo({
      id: shortid.generate(),
      text: todoField,
      complete: false
    });

    // Empty the field so user can add new todo
    setTodoField("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          name="todo"
          value={todoField}
          onChange={handleTodoFieldOnChange}
        />
        {/** Display the todos */}
        {todos.map(todo => (
          <TodoView id={todo.id} text={todo.text} />
        ))}
      </form>
    </div>
  );
}
