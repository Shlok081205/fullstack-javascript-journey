const express = require("express");
const app = express();

// 1. MUST come before routes to parse form data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    '<h1>User Form</h1><form action ="/user" method="post"><input type= "text" name = "t1"><button type = "submit">Click</button></form>',
  );
});

app.post("/user", (req, res) => {
  let name = req.body.t1;
  res.send("Name: " + name);
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});
