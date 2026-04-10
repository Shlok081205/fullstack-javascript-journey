const express = require("express");
const app = express();
//app.get(path,callback)
app.get("/", (req, res) => {
  res.set("content-type", "text/plain");
  res.send("Hello Everyone");
});

app.listen(3000);
