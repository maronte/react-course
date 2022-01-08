import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
//import FirstApp from "./FirstApp";
import './index.css';

ReactDOM.render(<CounterApp value={ 10 } />, document.getElementById("root"));

//ReactDOM.render(<FirstApp name="John" />, document.getElementById("root"));