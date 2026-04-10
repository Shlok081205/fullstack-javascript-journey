const express = require("express");
const app = express();

app.get("/data", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  res.send("Name: " + name + " Age: " + age);
});

app.listen(3000);
