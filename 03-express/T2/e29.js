//write a script to meet following requirements:• Create session.html file page which contains form(username,password,login button). and open it on localhost.• After clicking submit button, it should jump on “save” page. Store username and password in session.• After saving session, redirect to “fetchdata” page and read value. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively.o If this condition is true then display welcome admin and display logout link on this page(fetchdata).▪ By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”. And give the link of “login” under that message. By clicking that link user will be redirected to the home page.or Else display “Please enter valid username and password” and login link on this page(fetchdata).

const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Zura",
    resave: false,
    saveUninitialized: true,
  }),
);

// 1. HOME PAGE (session.html)
app.get("/", (req, res) => {
  res.send(`
        <h2>Login Form</h2>
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
  res.redirect("/fetchdata");
});

app.get("/fetchdata", (req, res) => {
  const { username, password } = req.session;

  if (username === "admin" && password === "admin@123") {
    res.send(`
            <h1>Welcome admin</h1>
            <a href="/destroy">Logout</a>
        `);
  } else {
    res.send(`
            <p style="color:red;">Please enter valid username and password</p>
            <a href="/">Login</a>
        `);
  }
});

app.get("/destroy", (req, res) => {
  req.session.destroy();
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
