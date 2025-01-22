import { useState , React } from "react";
import './../styles/App.css';

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
  )
}

export default App
