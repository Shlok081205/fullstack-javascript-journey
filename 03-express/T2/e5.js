const express = require("express");
const app = express();

let student = {
  u1: [
    { name: "LJU", id: 2 },
    { name: "LJU2", id: 3 },
    { name: "LJU3", id: 4 },
  ],
};

app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  let table = "<table border='1'><tr><th>Name</th><th>ID</th></tr>";
  for (let i = 0; i < student.u1.length; i++) {
    table += `<tr>
                <td>${student.u1[i].name}</td>
                <td>${student.u1[i].id}</td>
              </tr>`;
  }

  table += "</table>";
  res.send(table);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
