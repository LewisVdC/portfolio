import "./App.css";
import Terminal from "./components/terminal";

function App() {
  return (
    <>
      <div id="main">
        <div id="top" className="half">
          hi??
        </div>
        <div id="bottom" className="half">
          <div id="terminal">
            <Terminal></Terminal>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
