//Write code. Create a ejs file name contact.ejs that displays a heading contanct form and a form with name email id and submit button .Render this ejs  on the contact root. Handle Form submission using the post method on the submit root. After form submission display a message on the browser thankyou "name" we have recivied you "email"

const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Thank you ${name}, we have received your ${email}`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/contact");
});
