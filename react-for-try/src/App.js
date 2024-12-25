import React from "react";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye");
  }
  function hiFn() {
    console.log("I'm here!");
    return byFn;
  }
  // 1 > 코드가 더 간결함
  useEffect(() => {
    console.log("hi");
    return () => {
      console.log("bye");
    };
  }, []);
  //2
  useEffect(function () {
    console.log("hi!!");
    return function () {
      console.log("bye!!");
    };
  }, []);
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
