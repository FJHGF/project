import React from "react";
import { useState } from "react";

//import Button from "./Button";
//import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1); // prev : 이전 값
  console.log("claa api"); // 함수가 rendering되는걸 확인 > APP함수가 모두 render됌
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
