const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <form action="/login" method="GET">
      Username: <input type="text" name="user"><br><br>
      Password: <input type="password" name="pass"><br><br>
      Message: <textarea name="msg"></textarea><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.get("/login", (req, res) => {
  const { user, pass, msg } = req.query;
  res.send(`
    <h3>Submitted Details:</h3>
    <p>User: ${user}</p>
    <p>Pass: ${pass}</p>
    <p>Message: ${msg}</p>
    <a href="/message?msg=${encodeURIComponent(msg)}">show vowel</a>
  `);
});

const countVowels = (req, res, next) => {
  const msg = req.query.msg || "";
  const vowels = msg.match(/[aeiou]/gi);
  req.vowelCount = vowels ? vowels.length : 0;
  next();
};

app.get("/message", countVowels, (req, res) => {
  res.send(`<h1>Count of vowels in message: ${req.vowelCount}</h1>`);
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
