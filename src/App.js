import React, { useState } from "react";

function App() {
  let [number1, setNumber1] = useState(1);
  let [number2, setNumber2] = useState(100);

  return (
    <div>
      Number increment series: {number1}
      <br />
      Number decrement series: {number2}
      <br />
      <button onClick={() => setNumber1(++number1)}> + </button>
      <button onClick={() => setNumber2(--number2)}> - </button>
    </div>
  );
}

export default App;
