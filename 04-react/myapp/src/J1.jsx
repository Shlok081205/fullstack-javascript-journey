/**
 * Write React JS  to display a alert box with text welcome to LJU by clicking on a button provide css to button like
 * color,background-color,padding and margin
 */

function J1() {
  // Function to handle the click event and trigger the alert
  const handleAlert = () => {
    alert("Welcome to LJU");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <button
        onClick={handleAlert}
        style={{
          color: "#ffffff",
          backgroundColor: "#4f46e5",
          padding: "12px 24px",
          margin: "10px",
          fontSize: "16px",
          fontWeight: "600",
          border: "none",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default J1;

/**
 * Write React JS  to display values in console while changing it in textbox
 */