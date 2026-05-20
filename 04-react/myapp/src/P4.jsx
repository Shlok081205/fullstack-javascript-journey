function P4(props) {
  return (
    <div style={{ border: "1px solid #000", margin: "10px", padding: "15px" }}>
      <h2>Student Details</h2>
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Roll No:</strong> {props.rollNo}
      </p>
      <p>
        <strong>Original Marks:</strong> {props.marks}
      </p>
      <p>
        <strong>Updated Marks (+1):</strong> {props.marks + 1}
      </p>
    </div>
  );
}

export default P4;
