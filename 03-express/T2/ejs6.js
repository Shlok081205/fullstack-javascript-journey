//Write a code.that allows user to enter a students name and marks through a form after submission the application should display the entered details and etermine the result . if the marks are 9 or above show pass in green color otherwise in fail in red color

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  const { name, marks } = req.body;
  res.render("result", {
    name: name,
    marks: parseInt(marks),
  });
});

app.listen(3000, () => console.log("Server: http://localhost:3000"));
