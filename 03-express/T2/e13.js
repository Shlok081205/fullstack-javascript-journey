const express = require("express");
const app = express();

const addName = (req, res, next) => {
  req.name = "xyz";
  console.log("Name Added");
  next();
};

const addCollege = (req, res, next) => {
  req.college = "LJU";
  console.log("College Added");
  next();
};

const addMarks = (req, res, next) => {
  req.total = 50 + 90;
  console.log("Marks Calculated");
  next();
};

app.get("/student", addName, addCollege, addMarks, (req, res) => {
  res.json({
    name: req.name,
    college: req.college,
    totalMarks: req.total,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/student");
});
