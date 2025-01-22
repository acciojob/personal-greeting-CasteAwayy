import { useState } from "react";
import React from 'react';
const App = () => {
  const [name, setName] = useState("");
  function handleInput(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" onInput={handleInput} />
      {name != "" ? <p>Hello {name}!</p> : null}
    </div>
  );
};

export default App;
