/**
create a react application using props to display student details :
1. create a parent component prop1.jsx 
2. pass the following data to the child component prop2.jsx:your name,roll no and marks
3. display the data in the child component and increase the marks by 1 and display the updated marks
 */

import P4 from "./P4";

function P3() {
  return (
    <>
      <h1>Class Roster</h1>
      <P4 name="Shlok" rollNo={101} marks={85} />
      <P4 name="Patel" rollNo={102} marks={90} />
    </>
  );
}

export default P3;