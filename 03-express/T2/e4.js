const express = require("express");
const app = express();

let emp = {
  name: "Siya",
  age: 20,
  desi: "dev",
};

app.get("/", (req, res) => {
  res.json(emp);
});

app.get("/about", (req, res) => {
  res.write(emp.desi + " " + emp.name + " is " + emp.age + " years old");
  res.send();
});

app.get("/contact", (req, res) => {
  res.send(emp.name);
});

app.listen(3000);
