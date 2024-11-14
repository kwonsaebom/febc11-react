import { useState } from "react";

function App() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  return (
    <>
      <h1>03 상태관리 대상이 객체일 경우 주의 사항</h1>
      <div
        onPointerMove={(event) => {
          // 속성을 직접 수정하면 리렌더링 되지 않는다.

          position.x = event.clientX;
          position.y = event.clientY;

          const newPosition = { x: event.clientX + 10, y: event.clientY - 110 };
          setPosition(newPosition); // 객체의 주소가 바뀌어야 상태가 바뀐 것으로 인지

          console.log(position);
        }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}

export default App;
