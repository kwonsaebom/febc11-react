import { useState, useEffect } from "react";
const API_SERVER = "https://todo-api.fesp.shop/api";

function App() {
  const [data, setData] = useState("");

  const fetchTodo = async (fetchParams) => {
    const res = await fetch(API_SERVER + fetchParams.url);

    try {
      console.log(res);
      const jsonData = await res.json();
      console.log(jsonData);

      if (jsonData.ok) {
        // 서버로부터 데이터 도착
        // 데이터 출력해야 함
        setData(jsonData.items);
      } else {
        throw new Error(jsonData.error.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchParams = { url: "/todolist" };
    fetchTodo(fetchParams);
  }, []);

  return (
    <>
      <h1>08 Custom Hook - fetch API 사용</h1>
      <h2>할일 목록</h2>
      {/* 화면에 출력은 리액트가 할테니
          개발자들은 상태 관리를 해라 (UI) */}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item._id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
