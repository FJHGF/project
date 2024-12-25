import React from "react";
import { useState, useEffect } from "react";

//import Button from "./Button";
//import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, serKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1); // prev : 이전 값
  const onChange = (event) => serKeyword(event.target.value);
  //console.log("i run all the time "); // 계속 rendering
  useEffect(() => {
    //console.log("CALL THE API...");
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    //console.log(1);
    /*
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR ", keyword);
    }
    */
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when 'keyword' or 'counter' changes.");
  }, [keyword, counter]);
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search hear"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
