import "./Button.css";

export default function Button({ children, type = "button", onClick }) {
  // 태그 사이에 있는 문자열은 children으로 받아오기
  // 타입이 생략되어 있으면 button으로 기본값
  return (
    <button className="rounded-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
