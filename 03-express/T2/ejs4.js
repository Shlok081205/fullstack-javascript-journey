const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.get("/", (req, res) => {
  res.render("ex");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
