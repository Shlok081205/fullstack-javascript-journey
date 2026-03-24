//Create one page with two links one to /home and /about both pages must contain relevant html type content  if user add any other url path then it will be redirected to the gae which shows plain message page not found

var http = require("http");

http.createServer(function (req, res) {
    if (req.url === "/home") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Home Page</h1>");
      res.end();
    } 
    else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About Us</h1>");
      res.end();
    } 
    else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }

}).listen(3120);
