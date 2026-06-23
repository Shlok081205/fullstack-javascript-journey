import { useState, useEffect } from "react";

const Ue1 = () => {
  // State to store count values for two buttons
  const [count, setCount] = useState(0);
  const [calculation, setCal] = useState(0);

  useEffect(() => {
    alert("On every Update");
  });

  useEffect(() => {
    alert("Clicked Once");
  }, []);

  useEffect(() => {
    alert("Button A Clicked");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Button A</button>
      <br />
      <button onClick={() => setCal(calculation + 1)}>Button B</button>
      <p>Count A: {count}</p>
      <p>Calculation B: {calculation}</p>
    </div>
  );
};

export default Ue1;
