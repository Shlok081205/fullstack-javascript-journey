const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    '<h1>User Form</h1><form action ="/user" method="post">T1 <input type= "text" name = "t1"><br><br>T2 <input type= "text" name = "t2"><br><br>T3 <input type= "text" name = "t3"><br><br>T4 <input type= "text" name = "t4"><br><br><button type = "submit">Click</button></form>',
  );
});

app.post("/user", (req, res) => {
  let t1 = parseInt(req.body.t1);
  let t2 = parseInt(req.body.t2);
  let t3 = parseInt(req.body.t3);
  let t4 = parseInt(req.body.t4);
  let total = t1 + t2 + t3 + t4;
  res.send("Marks: " + total);
  res.json({ Marks: total });
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});
