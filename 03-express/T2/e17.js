const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      Username: <input type="text" name="user"><br><br>
      Password: <input type="password" name="pass"><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

const auth = (req, res, next) => {
  const { user, pass } = req.body;
  if (user === "admin" && pass === "1234") {
    next();
  } else {
    res.send("Invalid Credentials");
  }
};

app.post("/login", auth, (req, res) => {
  res.send("Login Successful");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
