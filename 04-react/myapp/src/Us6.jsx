/**
 * WRC having button and image by clicking on button image changes randomly from a given array of images
 */

import { useState } from "react";
import img1 from "./assets/hero.png";
import img2 from "./assets/images.jpeg";
import img3 from "./assets/flower.png";
import img4 from "./assets/student1.jpg";

function Us6() {
  // Store all imported image references in a flat array
  const imagesArray = [img1, img2, img3, img4];

  // Set the initial state to the first image in your array
  const [currentImg, setCurrentImg] = useState(imagesArray[0]);

  function handleRandomImage() {
    // Generate a random index number based on the array length
    const randomIndex = Math.floor(Math.random() * imagesArray.length);

    // Pick the random image object
    setCurrentImg(imagesArray[randomIndex]);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Clicking the button calls the random selector function */}
      <button
        onClick={handleRandomImage}
        style={{ marginBottom: "15px", padding: "8px 16px", cursor: "pointer" }}
      >
        Shuffle Image
      </button>
      <br />

      {/* Clicking the image directly will also cycle a new random picture */}
      <img
        src={currentImg}
        onClick={handleRandomImage}
        alt="Randomly changing display"
        width="300"
        height="200"
        style={{
          cursor: "pointer",
          border: "1px solid #ddd",
          borderRadius: "6px",
        }}
      />
    </div>
  );
}

export default Us6;
