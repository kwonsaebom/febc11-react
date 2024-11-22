import { useState, useEffect } from "react";
const API_SERVER = "https://todo-api.fesp.shop/api";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodo = async (fetchParams) => {
    try {
      setIsLoading(true);

      const res = await fetch(API_SERVER + fetchParams.url);

      console.log(res);
      const jsonData = await res.json();
      console.log(jsonData);

      if (jsonData.ok) {
        // 서버로부터 데이터 도착
        // 데이터 출력해야 함
        setData(jsonData.items);
        setError(null);
      } else {
        throw new Error(jsonData.error.message);
      }
    } catch (err) {
      console.log(err);
      setError({
        message:
          "일시적인 문제로 인해 작업 처리에 실패했습니다. 잠시후 다시 요청해 주시기 바랍니다.",
      });
      setData(null);
    } finally {
      setIsLoading(false); // 성공이든 실패든 어쩄거나 로딩은 끝났으므로 finally
    }
  };

  useEffect(() => {
    // API 호출 코드는 항상 useEffect 안에!
    // 1. 컴포넌트가 처음 렌더링 될 때 -> 데이터를 가져오거나(API호출), DOM을 조작해야 할 때
    // 2. 특정 상태나 값이 변경될 때  -> 상태, props, 특정 값이 업데이트될 때 작업을 실행할 때
    // 3. 컴포넌트가 언마운트 되기 전에 -> 정리가 필요할 때 (이벤트 리스너 제거, 타이머 정리)
    const fetchParams = { url: "/todolist?delay=3000" };
    fetchTodo(fetchParams);
  }, []);

  return (
    <>
      <h1>08 Custom Hook - fetch API 사용</h1>
      <h2>할일 목록</h2>
      {isLoading && <p>로딩중...</p>}
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
