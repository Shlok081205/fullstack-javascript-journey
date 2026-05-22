/**
 * Built a react app that displays a list od students using props create a student card to show details like student rollno.,name,marks andidcard img.Display student with 25 marks using filter method and if multiple students proceed with map
 * Use student list component to store data
 * File: Studentlist.jsx(PArent) and StudentFM.jsx(Child)
 */

import StudentFM from "./StudentFM.jsx";
import img1 from "./assets/hero.png";
import img2 from "./assets/hero.png";
import img3 from "./assets/hero.png";

function Studentlist() {
  const students = [
    {
      id: 1,
      rollNo: 101,
      name: "Rahul Sharma",
      marks: 25,
      idCardImg: img1,
    },
    {
      id: 2,
      rollNo: 102,
      name: "Anjali Patel",
      marks: 28,
      idCardImg: img2,
    },
    {
      id: 3,
      rollNo: 103,
      name: "Amit Verma",
      marks: 25,
      idCardImg: img3,
    },
  ];

  return (
    <div>
      <h1>Student Roster</h1>
      <StudentFM s={students} />
    </div>
  );
}

export default Studentlist;
