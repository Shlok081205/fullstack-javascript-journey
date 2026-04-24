const expr = require("express");
app = expr();
api = require("./app");

app.use("/api", api);

app.listen(7899, () => {
  console.log("http://localhost:7899/");
});
