//Get stimulates a college classroom entry system useing middleware when a student acesss the class room log that the student entered the campus. Verify the student has has a valid id card if valid allow entry  and display  a welcome message if not valid then deny access . Browser==> Welcome xyz to the campus  , Console ==> User entered the campus ID verified.     similar to req -> mw1(entry log)->mw2(checkid , hasid =true)->res

const express = require("express");
const app = express();

const entryLog = (req, res, next) => {
  console.log("User entered the campus.");
  next();
};

const checkID = (req, res, next) => {
  const hasID = req.query.hasid === "true";
  const name = req.query.name || "Student";

  if (hasID) {
    req.userName = name;
    console.log("ID verified.");
    next();
  } else {
    res.send("Access Denied: No valid ID card found.");
  }
};

app.get("/classroom", entryLog, checkID, (req, res) => {
  res.send(`Welcome ${req.userName} to the campus`);
});

app.listen(3000, () => {
  console.log(
    "Server running on http://localhost:3000/classroom?name=xyz&hasid=true  or  http://localhost:3000/classroom?name=xyz&hasid=false",
  );
});
