//Write a script to meet following requirements. Create Index..html file which contains username,password,login button and open it on local host.After clicking button it should jump on save page store username and password in session.After savingredirect to fetch page and read value and put a logout link here.Jump on delete session page after clicking on logout link destroy the session and redirect to index.html

const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Wolf",
    resave: false,
    saveUninitialized: true,
  }),
);

app.get("/", (req, res) => {
  res.send(`
        <h2>Login Page</h2>
        <form action="/save" method="POST">
            <input type="text" name="username" placeholder="Username" required><br><br>
            <input type="password" name="password" placeholder="Password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post("/save", (req, res) => {
  req.session.username = req.body.username;
  req.session.password = req.body.password;
  res.redirect("/fetch");
});

app.get("/fetch", (req, res) => {
  if (req.session.username) {
    res.send(`
            <h1>Welcome, ${req.session.username}</h1>
            <p>Your password is: ${req.session.password}</p>
            <a href="/logout">Logout</a>
        `);
  } else {
    res.send('No session found. <a href="/">Login here</a>');
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
