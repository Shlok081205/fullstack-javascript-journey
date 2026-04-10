//Write a program to load a simple html HTML file .Defined as static on node js web server . Print its content as HTML content

url_addr = "http://localhost:6051/demo.html";

var http = require("http");
var fs = require("fs");
var url = require("url");

q = url.parse(url_addr, true);
http
  .createServer(function (req, res) {
    fs.readFile("." + q.pathname, function (err, data) {
      if (err) {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("page not found");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(6051);
