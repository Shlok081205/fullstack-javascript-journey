const cp = require("cookie-parser");
const express = require("express");
const app = express();

app.use(cp());

app.get("/cookie", function (req, res) {
  res.cookie("fname", "Express JS");
  res.cookie("name", "Xeresus");
  res.cookie("lname", "Patel");
  res.cookie("ID", "1", { expires: new Date(Date.now() + 10000) });
  res.cookie("email", "e@gmail.com", { maxAge: 5000 });
  res.clearCookie("fname");
  res.send(req.cookies);
});

app.listen(3000, () => {
  console.log("Server active at http://localhost:3000");
});
