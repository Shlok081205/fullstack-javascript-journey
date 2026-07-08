// 08/07/26
// create html file which contains a form having username and password ,insert entered data by user
// in collection named data1,db name is login

var expr = require("express");
var app = expr();
const mg = require("mongoose");

// Connect to 'login' database
mg.connect("mongodb://127.0.0.1:27017/login")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

mg.pluralize(null);

const userSchema = new mg.Schema({
  username: { type: String, required: [true, "username is required"] },
  password: { type: String, required: [true, "password is required"] },
});

// Creates or links to 'data1' collection
const User = mg.model("data1", userSchema);

// Serves your static HTML files
app.use(expr.static(__dirname, { index: "T4_05_form.html" }));

// Cleaned up route handler (fixed nested function & property name mapping)
app.get("/process_get", async (req, res) => {
  try {
    const persondata = new User({
      username: req.query.username, // Fixed: changed 'name' to 'username' to match schema
      password: req.query.password,
    });

    await persondata.save();
    res.send("data inserted successfully");
  } catch (err) {
    res.status(400).send("Validation/Insertion Error: " + err.message);
  }
});

app.listen(6000, () => {
  console.log("Server running on http://localhost:6000");
});
