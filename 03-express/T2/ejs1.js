const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("first", { name: "Pam" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

/*
Tags:
<% %> ->control flow
<% = %> ->escaped html
<% - %> ->unescaped html
<% # %> ->comment
<% $ %> ->print literal
*/
