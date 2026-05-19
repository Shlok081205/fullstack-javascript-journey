/*
Render an Image hero.png which is available in assests folder. A paragraph in green color and font size 20px use external css for paragraph. Display current time and current dat in purple color and it should be center aligned
 */

import "./styles.css"; // Make sure to create this external CSS file
import heroImage from "./assets/hero.png";

function Comp2() {
  const currentDateTime = new Date();
  const timeString = currentDateTime.toLocaleTimeString();
  const dateString = currentDateTime.toLocaleDateString();

  return (
    <div>
      <img src={heroImage} alt="Hero" />

      <p className="green-text">
        Welcome to our website. Enjoy exploring our content.
      </p>

      <div style={{ color: "purple", textAlign: "center" }}>
        <p>Current Time: {timeString}</p>
        <p>Current Date: {dateString}</p>
      </div>
    </div>
  );
}

export default Comp2;
