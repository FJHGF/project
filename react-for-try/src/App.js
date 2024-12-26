import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault(); // form태그 submit할 때 브라우저가 새로고침을 방지
    //console.log(toDo);
    if (toDo === "") {
      return;
    }

    setToDos((currentArray) => [toDo, ...currentArray]); //직접 값을 넣거나 함수를 넣기
    // 새로운 값 + 현재 배열값(...currentArray)(배열 내 값만 남음)
    setToDo(""); // input 태그 내용 지우기
  };
  //console.log(toDo);
  console.log(toDos); //state를 수정하고 싶으면 modify를 통해서 수정
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
