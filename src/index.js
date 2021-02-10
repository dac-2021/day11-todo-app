import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const One = (props) => <Two boop>one {props.children}</Two>;

const Two = (props) =>
  props.beep ? (
    <Three>two {props.children}</Three>
  ) : (
    <Two beep {...props} />
  );

const Three = (props) => <span>three</span>;

ReactDOM.render(
  <React.StrictMode>
    <One>Producement</One>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
