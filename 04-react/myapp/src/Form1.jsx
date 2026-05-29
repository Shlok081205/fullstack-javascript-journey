import { useState } from "react";

function Form1() {
  const [name, setName] = useState("");

  function handleSubmission(event) {
    // Fixed typo from event.prevent.Default() to event.preventDefault()
    event.preventDefault();
    alert(`The name you entered was ${name}`);
  }

  return (
    <form onSubmit={handleSubmission} style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <label>
        Enter your Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" style={{ cursor: "pointer" }} />
    </form>
  );
}

export default Form1;
