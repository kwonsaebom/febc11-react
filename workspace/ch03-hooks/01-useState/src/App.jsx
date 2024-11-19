import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const handleMessage = (event) => {
    setMsg(event.target.value);
  };

  // 순서

  //1. 사용자가 입력
  //2. onChange -> handleMessage 호출
  //3. setMsg -> 상태 업데이트
  //4. 상태 변경 -> 컴포넌트 재렌더링
  //5. value={msg} -> 입력 필드 값 업데이트

  /*
  이 흐름은 React의 단방향 데이터 흐름(one-way data flow)을 따릅니다.
input -> onChange -> setState -> value
상태 msg는 React에서 중앙에서 관리되며, UI와 동기화됩니다.
입력 필드의 값(value)은 항상 상태 변수(msg)에 의해 제어되므로 제어 컴포넌트라고 부릅니다.

결과적으로, 사용자의 입력값과 상태(msg)는 항상 동기화됩니다.
*/

  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        <input type="text" value={msg} onChange={handleMessage} />
        <br />
        <span>입력 메세지: {msg}</span>
      </div>
    </>
  );
}

export default App;
