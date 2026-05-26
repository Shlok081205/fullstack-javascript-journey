
/**
 * Cretae a component to perform the task as described 
 * 1.Add a text fill and a submit button while changing the value in the text fill display it below the form(on change)
 * 2.Display this text fill value in an aler box upon submitting it(onSubmit)
 * 3.Add a button to perform click and double click events  onClick event display message in <h3></h3> tag you cilcled one
 * 4.On double click event dispaly the message on <h2></h2> tag. Display the message below the button
 */

function Events() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = document.getElementById("txtField").value;
    alert(val);
  };

  const handleClick = () => {
    document.getElementById("msgBox").innerHTML = "<h3>You clicked once</h3>";
  };

  const handleDoubleClick = () => {
    document.getElementById("msgBox").innerHTML = "<h2>You double clicked</h2>";
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif", maxWidth: "400px", margin: "auto" }}>
      
      {/* 1 & 2: Form Section */}
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          id="txtField"
          placeholder="Type here..."
          onChange={(e) => document.getElementById("liveText").innerText = e.target.value}
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px", flex: "1" }}
        />
        <button type="submit" style={{ padding: "8px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Submit
        </button>
      </form>
      
      {/* Text below form */}
      <div id="liveText" style={{ minHeight: "20px", color: "#555", fontWeight: "bold", marginBottom: "20px" }}></div>

      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      {/* 3 & 4: Button Section */}
      <button 
        onClick={handleClick} 
        onDoubleClick={handleDoubleClick}
        style={{ padding: "10px 20px", backgroundColor: "#008CBA", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", width: "100%", fontSize: "16px" }}
      >
        Action Button
      </button>

      {/* Message below button */}
      <div id="msgBox" style={{ marginTop: "15px", textAlign: "center", color: "#333" }}></div>
      
    </div>
  );
}

export default Events;

/**
 * 303,306
 */

/**
 * 
 */