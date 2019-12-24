import React from "react";

/** Component to display the todos */
export default function TodoView(props) {
  return <div key={props.id}>{props.text}</div>;
}
