import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h2>02 이벤트 핸들러에서 State 값을 여러번 변경했을 때 문제점</h2>
      <p>{number}</p>
      <button
        onClick={() => {
          // 한번의 이벤트에서는 state값도 한번만 변화
          console.log("click start", number);
          setNumber(number + 1); //0 + 1
          setNumber(number + 1); // 0 + 1
          console.log("click finish", number);
        }}
      >
        +2
      </button>
    </>
  );
}

export default App;
