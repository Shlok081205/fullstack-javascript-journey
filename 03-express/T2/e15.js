const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/check" method="POST">
      Username: <input type="text" name="username"><br><br>
      Password: <input type="password" name="password"><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

const checkAdmin = (req, res, next) => {
  const { username } = req.body;

  if (username === "admin") {
    next();
  } else {
    res.send('<h2 style="color:red;">Warning: Only admin is allowed!</h2>');
  }
};

app.post("/check", checkAdmin, (req, res) => {
  res.send(`<h1>Welcome... ${req.body.username}</h1>`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
