function App() {
  return (
    <>
      <h1>06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)</h1>

      <h2>상품 설명</h2>
      <p>상품명: 나이키 에어 맥스</p>
      <p>가격: 131,000원</p>
      <p>상품 설명</p>
      <div>
        <img src="https://11.fesp.shop/files/00-nike/AIR_MAX_A_01.png" width="600" />
        <p>나이키 에어 맥스는 어쩌고 저쩌고...</p>
      </div>

      <h2>수량 선택</h2>
      <div>
        가격: 131,000원<br/>
        수량: <input type="number" min="1" max="15" value="2" />
        (배송비는 5개당 3,500원씩 추가됩니다.)<br/>
        상품 금액: 262,000원
      </div>

      <h2>배송비</h2>
      <div>
        배송비: 3,500원<br/>
      </div>
      <br/>
      <button type="button">결제</button>
    </>
  );
}

export default App
