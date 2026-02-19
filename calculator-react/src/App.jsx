import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result + event.target.value);
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div>
      <input type="text" id='result' value={result} readOnly />

      <input type="button" value="1" class='inputs' onClick={handleClick} />
      <input type="button" value="2" class='inputs' onClick={handleClick} />
      <input type="button" value="3" class='inputs' onClick={handleClick} />
      <input type="button" value="4" class='inputs' onClick={handleClick} />
      <input type="button" value="5" class='inputs' onClick={handleClick} />
      <input type="button" value="6" class='inputs' onClick={handleClick} />
      <input type="button" value="7" class='inputs' onClick={handleClick} />
      <input type="button" value="8" class='inputs' onClick={handleClick} />
      <input type="button" value="9" class='inputs' onClick={handleClick} />
      <input type="button" value="0" class='inputs' onClick={handleClick} />

      <input type="button" value="+" class='inputs' onClick={handleClick} />
      <input type="button" value="-" class='inputs' onClick={handleClick} />
      <input type="button" value="*" class='inputs' onClick={handleClick} />
      <input type="button" value="/" class='inputs' onClick={handleClick} />
      <input type="button" value="." class='inputs' onClick={handleClick} />

      <input type="button" value="Clear" class='excess' onClick={clearDisplay} />
      <input type="button" value="=" class='excess' onClick={calculate} />
    </div>
  );
}

export default App;
