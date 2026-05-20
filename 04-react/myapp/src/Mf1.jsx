/*
create a react component that contains mf1.jsx that contins an array of student objects with Id,
name and standarad.perform the following task using map and filter:
1. Display only those students whose standard is 5.
2. Increase their standard by 1
3. Display student name and updated standard 
 */

function Mf1() {
  const students = [
    {
      id: 1,
      name: "Ram",
      std: 4,
    },
    {
      id: 2,
      name: "Shyam",
      std: 5,
    },
    {
      id: 3,
      name: "Kamla",
      std: 6,
    },
  ];

  return (
    <>
      <h1>Students</h1>
      {students
        .filter((student) => student.std === 5)
        .map((student) => (
          <div key={student.id}>
            <h2>Student Name: {student.name}</h2>
            <h2>Updated Standard: {student.std + 1}</h2>
          </div>
        ))}
    </>
  );
}

export default Mf1;
