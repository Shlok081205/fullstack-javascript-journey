/**
 * Write a program to build react app having a button which increase count by 1while clicking it
 */

import { useState } from "react";

function Us1() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={handleCount}>Click Here</button>
    </div>
  );
}

export default Us1;
