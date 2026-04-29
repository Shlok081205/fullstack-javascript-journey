//accept marks of t1,t2,t3 and t4 each out of 25 through form using post method ,after submission display all entered marks in a tabular format along with the total marks and determine the result if the total is 35 or more show pass in a green color otherwise fail in red color

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form1");
});

app.post("/submit", (req, res) => {
  const { name, t1, t2, t3, t4 } = req.body;

  const total = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4);

  res.render("result1", {
    name,
    marks: { t1, t2, t3, t4 },
    total,
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
