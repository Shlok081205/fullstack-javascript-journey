var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(req.url);
    res.end();
  })
  .listen(3051);
