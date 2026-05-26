/**
 * Write a program to change button text while clicking on modily this button text should change to updated text
 */

import { useState } from "react";

function Us3() {
  const [btnText, setBtnText] = useState("Click Me");

  function updateText() {
    if (btnText === "Click Me") {
      setBtnText("Updated Text");
    } else {
      setBtnText("Click Me");
    }
  }

  return (
    <div>
      <button onClick={updateText}>{btnText}</button>
    </div>
  );
}

export default Us3;
