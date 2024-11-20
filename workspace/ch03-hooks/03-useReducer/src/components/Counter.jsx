import { useEffect, useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

Counter.propTypes = {
  children: PropTypes.string,
};

function Counter({ children = "0" }) {
  console.log("Counter 렌더링");

  const initCount = Number(children);
  const [count, setCount] = useState(initCount);
  const [step, setStep] = useState(1);

  const handleDown = () => {
    setCount(count - step);
  };

  const handleUp = () => {
    setCount(count + step);
  };

  const handleReset = (event) => {
    setCount(initCount);
  };

  return (
    <div id="counter">
      <label htmlFor="step">증감치</label>
      {/* 제어 컴포넌트 value, onClick 사용 */}
      <input
        id="step"
        type="number"
        style={{ width: "40px" }}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <Button color="red" onClick={handleDown}>
        -
      </Button>
      <Button onClick={handleReset}>{initCount}</Button>
      <Button color="blue" onClick={handleUp}>
        +
      </Button>
      <span>{count}</span>
    </div>
  );
}

// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
// 매개 변수가 똑같으면 항상 똑같은 값을 반환함
// 로직을 컴포넌트 내부에서 직접 구현하지 않고 외부에서 구현
// state: 이전 상태(useReducer가 내부적으로 관리, 이전의 리턴 값이 다음의 state로 전달)
// action: 동작을 정의한 객체(자유롭게 작성, 일반적으로 type 속성에 동작을, value 속성에 값을 지정)
// 리턴 값: 새로운 상태
function counterReducer(state, action) {
  // (5, {type: "DOWN", value: 1})

  let newState;

  switch (action.type) {
    case "DOWN":
      newState = state - action.value;
      break;
    case "UP":
      newState = state + action.value;
      break;
    case "RESET":
      newState = action.value;
      break;
    default:
      newState = state;
  }

  return newState;
}
export default Counter;
