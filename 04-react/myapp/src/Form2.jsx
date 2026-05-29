import { useState } from "react";
function Form2() {
  const [name, setName] = useState("");
  function handlesubmit(event) {
    event.preventDefault();
    alert(`The name you entered was ${name}`);
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        {/* Enter your Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br></br> */}
        {/* <textarea type="text" value={name} onChange={(e)=>setName(e.target.value)}></textarea><br></br> */}
        {/* <select value={name} onChange={(e)=>setName(e.target.value)}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="jaguar">Jaguar</option>
                </select> */}
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => setName(e.target.value)}
        ></input>
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => setName(e.target.value)}
        ></input>
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={(e) => setName(e.target.value)}
        ></input>
        Other
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form2;
