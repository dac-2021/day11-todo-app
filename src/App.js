import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  let location = useLocation();
  let history = useHistory();
  console.log(location);

  const [navToggle, setNavToggle] = useState(true);

  history.listen((location, action) => console.log(location, action));

  return (
    <Router>
      {location.pathname !== "/login" && (
        <>
          <Link to="/">Page 1 </Link>
          <Link to="/page1">Page 1 </Link>
          <Link to="/page2">Page 2 </Link>
          <Link to="/page3">Page 3 </Link>
        </>
      )}

      <Route path="/login">
        <Login />
      </Route>

      <Route exact path="/">
        <Page1 />
      </Route>

      <Route path="/page1">
        <Page2 />
      </Route>

      <Route path="/page2">
        <Page2 />
      </Route>

      <Route path="/page3">
        <Page3 />
      </Route>
    </Router>
  );
}

function Login() {
  let history = useHistory();

  const gohome = () => history.push("/");

  return (
    <div>
      Login
      <button onClick={gohome}>HOME</button>
    </div>
  );
}

function Page1() {
  return <div>Page1</div>;
}

function Page2() {
  return <div>Page2</div>;
}

function Page3() {
  const history = useHistory();

  return (
    <div>
      Page3
      <div>
        <button onClick={() => history.push("/login")}>Go Login</button>
      </div>
    </div>
  );
}

function Todo() {
  const [inputTask, setInputTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Lets read localStroage when component is loaded
  useEffect(() => {
    const strTaskList = localStorage.getItem("taskList");

    // check for null and undefind
    if (strTaskList) {
      const objTaskList = JSON.parse(strTaskList);
      setTaskList(objTaskList);
    }
  }, []);

  // When Ever taskList is updated.
  // Add Item
  // Update Item
  // Delete Item
  useEffect(() => {
    const strTask = JSON.stringify(taskList);
    localStorage.setItem("taskList", strTask);
  }, [taskList]);

  const processInputTask = (e) => setInputTask(e.target.value);
  const processTask = (item) => {
    console.log("Process Task", item);

    item.complete = !item.complete;

    setTaskList([...taskList]);
  };

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
      <h5>
        InComplete Task {taskList.filter((item) => !item.complete).length}{" "}
      </h5>

      {/** Conditional JSX */}
      {taskList.filter((item) => !item.complete).length === 0 && (
        <h6 className="text-info">
          Add your First Task; And Go to the KBC
        </h6>
      )}

      {taskList
        .filter((item) => !item.complete)
        .map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.complete}
              // onChange={processTask}
              onChange={() => processTask(item)}
            />
            <span
              onClick={() => processTask(item)}
              style={{ marginLeft: "4px", cursor: "pointer" }}
            >
              {item.task}
            </span>
            <button
              // onClick={deleteTask}
              onClick={() => deleteTask(item)}
              style={{ marginLeft: "16px" }}
            >
              DEL
            </button>
          </div>
        ))}

      {/**Complete Task */}
      <br />
      <h5>
        Completed Task {taskList.filter((item) => item.complete).length}{" "}
      </h5>

      {/** COnditioanl JSX */}
      {taskList.filter((item) => item.complete).length === 0 && (
        <h6 className="text-warning">
          Hurray, There is No Task; Time for Holiday
        </h6>
      )}

      {taskList
        .filter((item) => item.complete)
        .map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={item.complete}
              // onChange={processTask}
              onChange={(e) => processTask(item)}
            />
            <span
              onClick={() => processTask(item)}
              style={{ marginLeft: "4px", cursor: "pointer" }}
            >
              {item.task}
            </span>
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
