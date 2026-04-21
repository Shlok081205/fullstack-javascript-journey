//Write express js script to perform following tasks.1. Create one html file which contains one text field for name, email field and checkbox for subscription. Html file will be loaded on home page. Email and name fields are required fields.2. On login page welcome user and email id data should be printed. a. If user checked the subscription then “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page. b. If user has not opted for the subscription then “You can subscribe to get daily updates” message will be printed and “subscribe” link will be displayed under the message. c. If user clicks subscribe link then he/she will be redirected to the subscription page. In this page “Thank you for the subscription” message will be printed and “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected to the home page.Use concept of the middleware and you can use any of http methods(get/post).

const express = require("express");
const session = require("express-session");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);

// 1. Home Page (HTML Form)
app.get("/", (req, res) => {
  res.send(`
        <h2>User Registration</h2>
        <form action="/login" method="POST">
            <input type="text" name="name" placeholder="Name" required><br><br>
            <input type="email" name="email" placeholder="Email" required><br><br>
            <label><input type="checkbox" name="subscribe"> Subscribe to newsletter</label><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// 2. Login Logic (Store in session)
app.post("/login", (req, res) => {
  req.session.user = {
    name: req.body.name,
    email: req.body.email,
    isSubscribed: req.body.subscribe === "on",
  };
  res.redirect("/login-page");
});

// Middleware to protect routes
const auth = (req, res, next) => {
  if (req.session.user) next();
  else res.redirect("/");
};

// 2a & 2b. Login Page
app.get("/login-page", auth, (req, res) => {
  const { name, email, isSubscribed } = req.session.user;
  let html = `<h1>Welcome ${name}</h1><p>Email: ${email}</p>`;

  if (isSubscribed) {
    html += `<p>Thank you for the subscription</p><a href="/logout">Logout</a>`;
  } else {
    html += `<p>You can subscribe to get daily updates</p><a href="/subscription">Subscribe</a>`;
  }
  res.send(html);
});

// 2c. Subscription Page
app.get("/subscription", auth, (req, res) => {
  req.session.user.isSubscribed = true; // Update session state
  res.send(`
        <p>Thank you for the subscription</p>
        <a href="/logout">Logout</a>
    `);
});

// Logout (Redirect to home)
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
