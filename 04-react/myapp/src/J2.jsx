function J2() {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Type here..."
      />
    </div>
  );
}

export default J2;

