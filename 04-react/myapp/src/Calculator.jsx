import { useState } from "react";

function Calculator() {
  const [state, setState] = useState({
    num1: "",
    num2: "",
    operation: "+",
    result: null,
    error: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.num1 || !state.num2) {
      alert("Please fill in all fields!");
      return;
    }

    let n1 = parseFloat(state.num1);
    let n2 = parseFloat(state.num2);

    switch (state.operation) {
      case "+":
        setState({ ...state, result: n1 + n2, error: null });
        break;
      case "-":
        setState({ ...state, result: n1 - n2, error: null });
        break;
      case "*":
        setState({ ...state, result: n1 * n2, error: null });
        break;
      case "/":
        if (n2 === 0) {
          setState({ ...state, error: "Cannot divide by zero!" });
          return;
        }
        setState({ ...state, result: n1 / n2, error: null });
        break;
    }

    // Show result in alert
    if (state.result !== null && !state.error) {
      alert(`Result: ${state.result}`);
    } else if (state.error) {
      alert(state.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Simple Calculator</h1>

      <div>
        <label>Number 1:</label>
        <input
          type="number"
          value={state.num1}
          onChange={(e) => setState({ ...state, num1: e.target.value })}
        />
      </div>

      <div>
        <label>Number 2:</label>
        <input
          type="number"
          value={state.num2}
          onChange={(e) => setState({ ...state, num2: e.target.value })}
        />
      </div>

      <div>
        <label>Operation:</label>
        <select
          value={state.operation}
          onChange={(e) => setState({ ...state, operation: e.target.value })}
        >
          <option value="+">Addition (+)</option>
          <option value="-">Subtraction (-)</option>
          <option value="*">Multiplication (*)</option>
          <option value="/">Division (/)</option>
        </select>
      </div>

      <button type="submit">Calculate</button>

      {state.result !== null && (
        <div>
          {state.error ? (
            <div style={{ color: "red" }}>{state.error}</div>
          ) : (
            <div>Result: {state.result}</div>
          )}
        </div>
      )}
    </form>
  );
}

export default Calculator;
