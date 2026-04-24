const expr = require("express");
const app = expr();
const api = require("./app");

app.use("/api", api);

app.listen(7899, () => {
  console.log("Server running at http://localhost:7899/api");
});
