import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return <Todo />;
}

function Todo() {
  const [taskList, setTaskList] = useState([
    { id: 1, task: "Task1", complete: false },
    { id: 2, task: "Task2", complete: true },
    { id: 3, task: "Task3", complete: true },
    { id: 4, task: "Task4", complete: false },
    { id: 5, task: "Task5", complete: false },
  ]);

  const processTask = () => {};

  return (
    <div>
      <h3>Todo Application</h3>

      {/** Input Block */}
      <div>
        <input type="text" placeholder="Add your task here" />
        <button>Add Task</button>
      </div>

      {/** New/Incomplete Task List */}
      {taskList
        .filter((item) => !item.complete)
        .map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={processTask}
            />
            <span style={{ marginLeft: "4px" }}>{item.task}</span>
            <button style={{ marginLeft: "16px" }}>DEL</button>
          </div>
        ))}

      {/**Complete Task */}
      <br />
      <h5>Completed Task</h5>
      {taskList
        .filter((item) => item.complete)
        .map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={processTask}
            />
            <span style={{ marginLeft: "4px" }}>{item.task}</span>
            <button style={{ marginLeft: "16px" }}>DEL</button>
          </div>
        ))}
    </div>
  );
}

export default App;
