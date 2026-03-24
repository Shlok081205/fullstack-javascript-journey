var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>My Image</h1>");
      res.write('<img src="/my-photo.jpg" alt="Profile Picture" width="300">');
      res.end();
    } else if (req.url === "/my-photo.jpg") {
      fs.readFile("./my-photo.jpg", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Image file not found on server.");
        } else {
          res.writeHead(200, { "Content-Type": "image/jpeg" });
          res.end(data);
        }
      });
    }

    // 3. Catch-all for any other unknown URLs
    else {
      res.writeHead(404);
      res.end("Page not found");
    }
  })
  .listen(3120);
