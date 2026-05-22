function StudentFM(props) {
  return (
    <>
      {props.s
        .filter((student) => student.marks === 25)
        .map((student) => (
          <div key={student.id}>
            <h2>Name: {student.name}</h2>
            <img src={student.idCardImg} alt={student.name} width="150" />
            <h2>Roll No: {student.rollNo}</h2>
            <h2>Marks: {student.marks}</h2>
          </div>
        ))}
    </>
  );
}

export default StudentFM;
