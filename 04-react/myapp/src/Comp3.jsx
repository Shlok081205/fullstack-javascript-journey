import { useState } from "react";

function Comp3({ num1, num2 }) {
  const [result, setResult] = useState(0);

  const handleCalculation = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  return (
    <div>
      <h2>Comp3</h2>
      <p>
        Numbers: {num1} and {num2}
      </p>
      <button onClick={handleCalculation}>Calculate</button>
      <p> Result: {result}</p>
    </div>
  );
}

export default Comp3;
