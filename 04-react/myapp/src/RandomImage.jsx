import { useState, useEffect } from "react";
import axios from "axios";

const RandomImage = () => {
  const [myimg, setimg] = useState("");

  useEffect(() => {
    setInterval(() => {
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          console.log(response.data);
          setimg(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }, []);

  return <img src={myimg.message} alt="Random Dog" />;
};

export default RandomImage;
