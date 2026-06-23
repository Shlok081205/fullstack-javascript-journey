import { useState, useEffect } from "react";

const DigitalClock = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Effect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Update state with the current time
    }, 1000); // Schedule this effect to run every 1000 milliseconds (1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  // Format time as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <h1>Digital Clock</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default DigitalClock;
