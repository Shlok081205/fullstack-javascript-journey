//set cookies of submitted values perform following task create an HTMLAllCollection; file which contains a form with fixed firstnamelastname,password and a submit button once form subbmitted store these entered values to the respective cookies on '/next-page' then rediredict user to /admin page and clear the cookies set for the lastname display remaining set of cookie on this page using post method

const express = require("express");
const cp = require("cookie-parser");
const path = require("path");
const app = express();

app.use(cp());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/next" method="POST">
      First Name: <input type="text" name="fname" required><br><br>
      Last Name: <input type="text" name="lname" required><br><br>
      Password: <input type="password" name="pass" required><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/next", (req, res, next) => {
  res.cookie("fname", req.body.fname);
  res.cookie("lname", req.body.lname);
  res.cookie("password", req.body.pass);
  res.redirect("/admin");
});

app.get("/admin", (req, res) => {
  res.clearCookie("lname");
  res.send(
    "Fname: " +
      req.cookies.fname +
      " Lname: " +
      req.cookies.lname +
      " Password: " +
      req.cookies.pass,
  );
});

app.listen(3000, () => {
  console.log("Server active at http://localhost:3000");
});
