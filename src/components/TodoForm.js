import React, { useState } from "react";
import shortid from "shortid";
import TodoView from "./TodoView";

export function TodoForm() {
  // Fields State
  const [taskField, setTaskField] = useState("");

  // An array to store the todo list
  const [tasks, setTasks] = useState([]);

  // Function to update the field state
  const handleTaskFieldOnChange = e => {
    setTaskField(e.target.value);
  };

  // Function to add todo into the todo list
  const addTask = task => {
    // Append a new todo in front of the todos array
    // - todo is new value
    // - ...todoField is todos array
    setTasks([task, ...tasks]);
  };

  // Function to set the todo complete
  const completeTask = p_id => {
    // Update the complete flag
    let newTasks = tasks.map(task => {
      if (p_id === task.id) {
        return {
          id: task.id,
          text: task.text,
          complete: !task.complete
        };
      } else {
        return task;
      }
    });
    // Update the array
    setTasks(newTasks);
  };

  // Submit function
  const handleOnSubmit = e => {
    // Prevent reload the form
    e.preventDefault();

    // Call the addTodo function to add the value
    addTask({
      id: shortid.generate(),
      text: taskField,
      complete: false
    });

    // Empty the field so user can add new todo
    setTaskField("");
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          name="task"
          value={taskField}
          onChange={handleTaskFieldOnChange}
        />
        <button onClick={handleOnSubmit}>Add Task</button>
        {/** Display the todos */}
        {tasks.map(task => (
          <TodoView
            key={task.id}
            task={task}
            completeTask={() => completeTask(task.id)} // Example on how to function parameter in props
          />
        ))}
      </form>
    </div>
  );
}
