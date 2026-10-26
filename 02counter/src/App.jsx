import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15);

  const addvalue = () => {
    // setCounter(counter + 1);

    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    setCounter((prevcounter) => prevcounter + 1);
    console.log(counter);
  };

  const removevalue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React course with udemy {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>{" "}
      <button onClick={removevalue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
