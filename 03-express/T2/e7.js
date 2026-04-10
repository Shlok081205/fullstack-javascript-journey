const express = require("express");
const app = express();

app.get("/calender/:day/event/:ename", (req, res) => {
  res.send(req.params);
});

app.listen(3000);
