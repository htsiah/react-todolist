import React from "react";

/** Component to display the todos */
export default function TodoView(props) {
  return (
    <div
      key={props.task.id.toString()}
      style={{ textDecoration: props.task.complete ? "line-through" : "" }}
      onClick={props.completeTask}
    >
      {props.task.text}
    </div>
  );
}
