const express = require("express");
const app = express();

let student = {
  name: "XYZ",
  age: 18,
};

app.get("/student", (req, res) => {
  //res.write(JSON.stringify(student))
  //res.send();
  //res.send(student)
  res.json(student);
});

app.listen(3000);
