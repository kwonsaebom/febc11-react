import "./Button.css";
import { PropTypes } from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired, // 필수 -> 꼭 필요하므로
  type: PropTypes.string,
  onClick: PropTypes.func, // 이벤ㅌ트 필요하면 작성
  color: PropTypes,
};

export default function Button({
  children,
  type = "button",
  onClick: clickerHandler,
  color,
}) {
  // 태그 사이에 있는 문자열은 children으로 받아오기
  // 타입이 생략되어 있으면 button으로 기본값
  return (
    <button className="rounded-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
