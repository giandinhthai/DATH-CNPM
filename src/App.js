import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContext from "./MainContext";
const App = () => {
  const [fixedTopHeight, setFixTopHeight] = useState(0);
  const [mainDisplay, setMainDisplay] = useState("home");
  useEffect(() => {
    const fixedTop = document.querySelector("#fixedTop");
    if (fixedTop) {
      const height = fixedTop.scrollHeight;
      setFixTopHeight(height);
    }
  }, []);
  return (
    <div>
      <Header
        name="Dat Nguyen"
        money={1000000}
        onClickOnAccount={() => {
          console.log("access account info");
        }}
        onClickOnLogout={() => {
          console.log("logout");
        }}
        mainDisplay={mainDisplay}
        setMainDisplay={setMainDisplay}
      />
      <div style={{ paddingTop: fixedTopHeight }}>
        <MainContext
          mainDisplay={mainDisplay}
          setMainDisplay={setMainDisplay}
          showDetail={() => {}}
        />

        <Footer />
      </div>
    </div>
  );
};

export default App;
