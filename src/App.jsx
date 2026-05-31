import "./App.css";

import { useState } from "react";

import Terminal from "./components/terminal.jsx";
import Top from "./components/top.jsx";

function App() {
  const [page, setpage] = useState("aboutme");
  //console.log("page =", page);
  return (
    <>
      <div id="main">
        <div id="top" className="half">
          <Top page={page}></Top>
        </div>
        <div id="bottom" className="half">
          <div id="terminal">
            <Terminal page={page} setpage={setpage}></Terminal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
