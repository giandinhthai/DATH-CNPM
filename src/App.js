import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import MainContext from "./MainContext";
const App = () => {
  const [fixedTopHeight, setFixTopHeight] = useState(0);
  const [navIndex, setNavIndex] = useState(0);
  useEffect(() => {
    const fixedTop = document.querySelector("#fixedTop");
    if (fixedTop) {
      const height = fixedTop.scrollHeight;
      setFixTopHeight(height);
    }
  });
  return (
    <div>
      <div id="fixedTop" className="fixed-top bg-secondary">
        <Header
          name="Dat Nguyen"
          money={10000000}
          onClickOnAccount={() => {
            console.log("access account info");
          }}
          onClickOnLogout={() => {
            console.log("logout");
          }}
        />
        <Navbar navIndex={navIndex} setNavIndex={setNavIndex} />
      </div>
      <div style={{ paddingTop: fixedTopHeight }}>
        <MainContext navIndex={navIndex} showDetail={() => {}} />

        <Footer />
      </div>
    </div>
  );
};

export default App;
