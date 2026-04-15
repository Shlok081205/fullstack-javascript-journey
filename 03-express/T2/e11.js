const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // Removed the extra nested app.get line
  res.send(`
    <h1>User Form</h1>
    <form action="/user" method="post">
      Name: <input type="text" name="userName"><br><br>

      Gender: 
      <input type="radio" name="gender" value="Male"> Male
      <input type="radio" name="gender" value="Female"> Female
      <input type="radio" name="gender" value="Others"> Others<br><br>

      Skills: 
      <input type="checkbox" name="skills" value="Python"> Python
      <input type="checkbox" name="skills" value="React"> React
      <input type="checkbox" name="skills" value="Node/Express"> Node/Express<br><br>

      Dept: 
      <select name="dept">
        <option value="CS">CS</option>
        <option value="CST">CST</option>
        <option value="CE">CE</option>
        <option value="AIML">AIML</option>
      </select><br><br>

      <button type="submit">Click here</button>
    </form>
  `);
});

app.post("/user", (req, res) => {
  const name = req.body.userName;
  const gender = req.body.gender;
  const dept = req.body.dept;
  const skills = req.body.skills;

  res.send(`
    Name: ${name} <br>
    Gender: ${gender} <br>
    Skill: ${skills} <br>
    Dept: ${dept}
  `);
});

app.listen(3000, () => {
  console.log("Running on http://localhost:3000");
});
