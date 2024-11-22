import PropTypes from "prop-types";

Link.PropTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

function Link({ children, to }) {
  const handleClick = (e) => {
    // e = a 태그
    e.preventDefault(); // a 태그 무력화 시킴

    // (state, title, url)
    //  주소 바뀌도록 함
    window.history.pushState(null, "", e.target.pathname); // ex) pathname: /home.html
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
export default Link;
