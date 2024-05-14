

import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <TaskInput />
      </div>
      <TaskList />
    </div>
  );
};

export default App;
