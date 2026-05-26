/**
 * WAPTBR
 * 1.Add 3 buttons a.Change text b.change color c.hide or show
 * 2.Add heading "Wagh Bakri Chai" in red-brow color
 * 3.Also add react js hooks in h2 tag
 * 4.By clicking on change text button text should be change to welcome customres ans vice-versa
 * 5.By clciking on change color button change color of text to Yellow and vice-versa
 * 6.THis color change should be performed while double clicking on a button
 * 7.Initally, button text should be hidden while clicking on that button button text should be changed to show and text react jsHooks will  not be shown
 */

import { useState } from "react";

function Us4() {
  // Requirement 4: State for toggling the heading text
  const [headingText, setHeadingText] = useState("Wagh Bakri Chai");

  // Requirement 5 & 6: State for toggling the text color
  const [textColor, setTextColor] = useState("#8B0000"); // Red-brown color hex

  // Requirement 7: States for hiding/showing and changing the toggle button's text
  const [showHooks, setShowHooks] = useState(false); // Initially false (hidden)
  const [toggleBtnText, setToggleBtnText] = useState("Show"); // Initially "Show"

  // Requirement 4: Function to toggle heading text
  function updateText() {
    if (headingText === "Wagh Bakri Chai") {
      setHeadingText("Welcome's Customers");
    } else {
      setHeadingText("Wagh Bakri Chai");
    }
  }

  // Requirement 5 & 6: Function to toggle color on double-click
  function updateColor() {
    if (textColor === "#8B0000") {
      setTextColor("yellow");
    } else {
      setTextColor("#8B0000");
    }
  }

  // Requirement 7: Function to handle visibility toggle and button text flip
  function toggleVisibility() {
    if (toggleBtnText === "Show") {
      setToggleBtnText("Hide");
      setShowHooks(true);
    } else {
      setToggleBtnText("Show");
      setShowHooks(false);
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Requirement 2: Heading in styled red-brown color */}
      <h1 style={{ color: textColor }}>{headingText}</h1>

      {/* Requirement 3 & 7: Conditional render of React JS Hooks heading */}
      {showHooks && <h2>React JS Hooks</h2>}

      <br />

      {/* Requirement 1a & 4: Change text button */}
      <button onClick={updateText} style={{ marginRight: "10px" }}>
        Change Text
      </button>

      {/* Requirement 1b, 5 & 6: Change color button with onDoubleClick */}
      <button onDoubleClick={updateColor} style={{ marginRight: "10px" }}>
        Change Color
      </button>

      {/* Requirement 1c & 7: Hide/Show button */}
      <button onClick={toggleVisibility}>{toggleBtnText}</button>
    </div>
  );
}

export default Us4;
