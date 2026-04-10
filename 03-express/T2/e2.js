const express = require("express");
const app = express();

//app.method ==> get->retrive,post->Send,put->update,delete->remove

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("<h1>Banki</h1>");
});

app.get("/about", (req, res) => {
  res.type("text/html");
  res.send("<h1>About Us</h1>");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
