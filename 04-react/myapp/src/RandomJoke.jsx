import { useState, useEffect } from "react";
import axios from "axios";

const RandomJoke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchRandomJoke = async () => {
      try {
        const response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke",
        );
        if (isMounted) {
          setJoke(response.data.setup + " " + response.data.punchline);
        }
      } catch (error) {
        console.error("Error fetching random joke:", error);
        setJoke("Failed to load joke.");
      }
    };

    fetchRandomJoke();

    const intervalId = setInterval(fetchRandomJoke, 20000);

    return () => {
      clearInterval(intervalId);
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Random Joke</h1>
      <p>{joke}</p>
    </div>
  );
};

export default RandomJoke;
