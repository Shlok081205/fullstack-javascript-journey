/**
 * Cretate a react apllication Exp1 and Exp2 using props to pass an object to pass an object from one component to another compnent
 * 1.create a parent component Exp1.jsx
 * 2.Cretae an object named details containing student name and university name
 * 3.pass the detials object to Exp2.jsx the child component
 * 4.In child component display student and university name
 */

import Exp2 from "./Exp2";

function Exp1() {
  // Creating the student details object
  const studentDetails = {
    name: "Aarav Shah",
    university: "Gujarat Technological University",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>University Enrollment</h1>
      {/* Passing the object as a prop */}
      <Exp2 details={studentDetails} />
    </div>
  );
}

export default Exp1;
