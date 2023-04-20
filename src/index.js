import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const today = new Date().toLocaleTimeString();

ReactDOM.render(<App now={today} />, document.getElementById("root"));
