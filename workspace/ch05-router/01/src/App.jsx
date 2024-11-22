import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { useState, useEffect } from "react";

function App() {
  const [path, setPath] = useState(window.location.pathname);
  console.log(path);

  // mount 될 때 최초 한번만 실행할 것이므로 빈 배열
  useEffect(() => {
    const handleNavigate = (e) => {
      setPath(e.destination.url.split(location.host).pop());
    };

    window.navigation.addEventListener("navigate", handleNavigate);

    return () => {
      window.navigation.removeEventListener("navigate", handleNavigate);
    };
  }, []);

  return (
    <>
      {(path === "/" || path === "/home.html") && <Home />}
      {path === "/page1.html" && <Page1 />}
      {path === "/page2.html" && <Page2 />}
    </>
  );
}

export default App;
