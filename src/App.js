import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("My Project");
  const [list, setList] = useState([]);

  // Will be called, when our compoent is getting loaded.
  // How many times is going to called :: ideally 1
  useEffect(() => {
    console.log("I am called on the load of the component.");

    setTitle("My Project Book");

    let tempList = ["Delhi", "Calcutta", "Mumbai", "Chennai"];
    setList(tempList);
  }, []);

  return (
    <div>
      Hello World
      <div>{title}</div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
