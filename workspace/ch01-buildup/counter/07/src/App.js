import Yong from "../yong.js";
import Counter from "./Counter.js";
import Header from "./Header.js";

function App() {
  // 애플리케이션의 시작점
  function App() {
    return Yong.createElement("div", { id: "app" }, Header, Counter); // cmd + i 를 눌러서 import 자동 완성
  }
}

export default App;
