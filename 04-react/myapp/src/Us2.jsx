/**
 * CAPTBR having buttons to increment and decrement the number by clicking the respective buttons
 * also increment of the number should be performed only if number is less than 10 and decrement of the number should be perfodef if number is greater than 0
 */

import { useState } from "react";

function Us2() {
  const [count, setCount] = useState(0);

  function handlerInc() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handlerDec() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p>Number: {count}</p>
      <button onClick={handlerInc}>Increment</button>
      <br />
      <button onClick={handlerDec}>Decrement</button>
    </div>
  );
}

export default Us2;
