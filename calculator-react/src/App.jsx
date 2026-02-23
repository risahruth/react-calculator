import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="calculator">
      <h2>React Calculator</h2>

      <input
        type="text"
        value={input}
        readOnly
        className="display"
      />

      <div className="buttons">
        <button onClick={clearInput} className="special">C</button>
        <button onClick={deleteLast} className="special">DEL</button>

        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() =>
              btn === "=" ? calculateResult() : handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;