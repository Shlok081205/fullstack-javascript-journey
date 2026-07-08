import { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5000/signup", { username });
      alert("welcome " + username);
      setUsername("");
    } catch (err) {
      console.log(err);
      alert("An error occured");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handlesignup}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
export default Signup;
