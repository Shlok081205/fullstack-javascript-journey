/**
 * WAPTBR which change a image by clicking on it
 */
import { useState } from "react";
import img1 from "./assets/hero.png";
import img2 from "./assets/images.jpeg";

function Us5() {
  // Use the imported image variable as the initial state
  const [currentImg, setCurrentImg] = useState(img1);

  function handleImageToggle() {
    // Compare directly against the imported variables
    if (currentImg === img1) {
      setCurrentImg(img2);
    } else {
      setCurrentImg(img1);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleImageToggle} style={{ marginBottom: "10px", padding: "5px 10px", cursor: "pointer" }}>
        Image Changer
      </button>
      <br />
      <img
        src={currentImg}
        onClick={handleImageToggle}
        alt="Toggleable display"
        width="300"
        height="200"
        style={{ cursor: "pointer", border: "1px solid #ccc", borderRadius: "4px" }}
      />
    </div>
  );
}

export default Us5;
