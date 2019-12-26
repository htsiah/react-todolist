This is a practical react on how to create todo app. The application has an input box. When the user enter the task, the task stores in an array and display on the screen. The user can click on the task to set the task complete or uncomplete.

This application tested on Node v12.13.1.

It is build on react 16.12.0. The implementation completely using function, no class. It uses hooks functionality, for example:

- useState: to set state.
- pass function parameter in props.
  <TodoView
  key={task.id}
  task={task}
  completeTask={() => completeTask(task.id)} // Pass completeTask function with task.id as parameter
  />
- style decaration with condition.
  <div
    key={props.task.id.toString()}
    style={{ textDecoration: props.task.complete ? "line-through" : "" }} // Style decoration with condition
    onClick={props.completeTask}
  >

This application also used shortid (npm install shortid) - This react library is to create unique short id for each task item.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

Ben Awad - Coding a Todo List in React.js<br />
https://www.youtube.com/watch?v=I6IY2TqnPDA&list=PLN3n1USn4xlntqksY83W3997mmQPrUmqM&index=16
