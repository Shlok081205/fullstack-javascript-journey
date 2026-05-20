function Exp2(props) {
  return (
    <div style={{ border: "2px solid #4CAF50", borderRadius: "8px", padding: "20px", margin: "15px", maxWidth: "300px" }}>
      <h3>🎓 Student Profile</h3>
      <p><strong>Student Name:</strong> {props.details.name}</p>
      <p><strong>University:</strong> {props.details.university}</p>
    </div>
  );
}

export default Exp2;
