var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function (req, res) {
    var filename = (req.url === "/") ? "about.html" : "demo.html";

    fs.readFile("./" + filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found: " + filename);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
}).listen(6051);