var http = require("http");

a = { Name: "Danger", Surname: "Dungara" };

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(a)); // Converts object to string

    res.end();
  })
  .listen(3120);
