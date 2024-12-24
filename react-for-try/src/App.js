import React from "react";
import { useState, useEffect } from "react";

//import Button from "./Button";
//import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1); // prev : 이전 값
  console.log("i run all the time "); // 계속 rendering
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
