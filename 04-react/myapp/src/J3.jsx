/***
 * Write React Form Submisiion on click give alert
 */

function J3() {
  const handleSubmit = () => {
    // Read the input value directly from the DOM using its ID
    const username = document.getElementById("usernameInput").value;
    alert(`Form Submitted! Welcome, ${username}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input type="text" id="usernameInput" placeholder="Enter your name" />
      <button onSubmit={handleSubmit} style={{ marginLeft: "10px" }}>
        Submit
      </button>
    </div>
  );
}

export default J3;
