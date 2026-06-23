<<<<<<< HEAD
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
=======
import { useState } from 'react';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const handleNumberClick = (number) => {
    setExpression(expression + number);
  };

  const handleOperatorClick = (operator) => {
    if (expression !== '') {
      setExpression(expression + operator);
    }
  };

  const handleEqualsClick = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult);
      setHistory([...history, expression]);
      setExpression('');
    } catch (error) {
      console.error(error);
      alert('Error: Invalid math operation');
    }
  };

  const handleClearClick = () => {
    setExpression('');
    setResult(0);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={expression}
        readOnly
        className="expression"
      />
      <button className="operator" onClick={() => handleOperatorClick('/')}>
        /
      </button>
      <button className="number" onClick={() => handleNumberClick(7)}>
        7
      </button>
      <button className="number" onClick={() => handleNumberClick(8)}>
        8
      </button>
      <button className="number" onClick={() => handleNumberClick(9)}>
        9
      </button>
      <button className="operator" onClick={() => handleOperatorClick('*')}>*</button>

      <button className="number" onClick={() => handleNumberClick(4)}>
        4
      </button>
      <button className="number" onClick={() => handleNumberClick(5)}>
        5
      </button>
      <button className="number" onClick={() => handleNumberClick(6)}>
        6
      </button>
      <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>

      <button className="number" onClick={() => handleNumberClick(1)}>
        1
      </button>
      <button className="number" onClick={() => handleNumberClick(2)}>
        2
      </button>
      <button className="number" onClick={() => handleNumberClick(3)}>
        3
      </button>
      <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>

      <button className="number" onClick={() => handleNumberClick(0)}>0</button>
      <button className="clear" onClick={handleClearClick}>
        C
      </button>
      <button className="equals" onClick={handleEqualsClick}>=</button>

      <div className="history">
        History:
        {history.map((expression, index) => (
          <span key={index}>{expression}</span>
        ))}
      </div>
    </div>
>>>>>>> 19811fa46cff89bb19460e0e76bdb7cada71339f
  );
}

export default Calculator;
