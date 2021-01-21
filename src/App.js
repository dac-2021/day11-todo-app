import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return <Todo />;
}

function Todo() {
  const [inputTask, setInputTask] = useState("");
  const [taskList, setTaskList] = useState([
    { id: 1, task: "Sample Task1", complete: false },
    { id: 3, task: "Sample Task3", complete: true },
  ]);

  const processInputTask = (e) => setInputTask(e.target.value);
  const processTask = () => {};

  const checkEnterKey = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      addNewTask();
    }
  };

  const addNewTask = () => {
    if (inputTask === "") {
      // alert("Task Can not be empty");
      return;
    }

    // lets push hard coded new task
    const anewTask = {
      id: taskList.length + 1,
      task: inputTask,
      complete: false,
    };

    setTaskList([anewTask, ...taskList]);
    setInputTask("");
  };

  const deleteTask = (item) => {
    console.log("Calling Delete", item);

    // Filter the Click Item
    const newTaskList = taskList.filter((aitem) => {
      if (aitem.id === item.id) {
        // ignore this item
        return false;
      } else {
        return true;
      }
    });

    setTaskList(newTaskList);
  };

  return (
    <div>
      <h3>Todo Application</h3>

      {/** Input Block */}
      <div>
        <input
          type="text"
          value={inputTask}
          onChange={processInputTask}
          onKeyUp={checkEnterKey}
          placeholder="Add your task here"
        />
        <button onClick={addNewTask}>Add Task</button>
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
            <button
              // onClick={deleteTask}
              onClick={(e) => deleteTask(item)}
              style={{ marginLeft: "16px" }}
            >
              DEL
            </button>
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
            <button
              onClick={(e) => deleteTask(item)}
              style={{ marginLeft: "16px" }}
            >
              DEL
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
