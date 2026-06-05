import { useEffect, useRef, useState } from "react";

export default function Terminal({ setpage }) {
  const start = useRef(false);
  useEffect(() => {
    // use this or it sets mid render and breaks
    setpage("aboutme");

    if (start.current == false) {
      start.current = true;
      outputtext("Welcome! use 'help' for more information");
      outputtext("empty");
    }
  }, []);
  const buffer = "";
  function handleEnter() {
    setOutput((prev) => [...prev, "user@pc:~$ " + text]);
    if (text === "projects") {
      outputtext("Loading...");
      setpage("projects");
    } else if (text === "aboutme") {
      outputtext("Loading...");
      setpage("aboutme");
    } else if (text === "clear") {
      setOutput([]);
    } else if (text === "help") {
      outputtext("available commands");
      outputtext("'help'  - show this info");
      outputtext("'clear'  - clear terminal");
      outputtext("'projects'  - list all projects");
      outputtext("'aboutme' - show about me");
    } else {
      setOutput((prev) => [...prev, `'${text}' is not recognized as command`]);
    }
    setText("");
    outputtext("empty");
  }

  const inputRef = useRef(null);
  const [text, setText] = useState("");
  const [output, setOutput] = useState([]);

  function outputtext(text) {
    if (text === "empty") {
      setOutput((prev) => [...prev, "\u00A0"]);
    } else {
      setOutput((prev) => [...prev, text]);
    }
  }

  useEffect(() => {
    const focusInput = () => inputRef.current?.focus();

    focusInput();
    window.addEventListener("click", focusInput);

    return () => {
      window.removeEventListener("click", focusInput);
    };
  }, []);

  return (
    <div id="terminaltext">
      <div id="typing">
        <input
          id="hiddeninput"
          autoComplete="off"
          onChange={(e) => setText(e.target.value)}
          value={text}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEnter();
            }
          }}
        ></input>
      </div>
      <div className="output">
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <p className="nomargin">
        user@pc:~$ <span id="textinput">{text}_</span>
      </p>
    </div>
  );
}
