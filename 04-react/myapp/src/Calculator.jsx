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
  );
}

export default Calculator;
