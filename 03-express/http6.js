//Write Nodejs script to fetch values from url and display output as asked . Data must be written in file  exam.txt File name must be fetched from url. output in file Hello\nWelcome to LJU\nFSD2 T1 Test\n#All the best. Read the content from file and sent response to server and display data in "/" page . In same format as the output in file but in h1 tag and crimson red color. If any other is requested it shows page not found in plain text

var http = require("http");
var fs = require("fs");
var url = require("url");

var url_addr =
  "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#All the Best";
var q = url.parse(url_addr, true);

var filename = q.pathname.split("/").pop();

console.log("File Name: ", filename);

var c1 = q.query.c1;
var c2 = q.query.c2;
var c3 = q.query.c3;
var hashPart = q.hash;
hashPart = hashPart.replaceAll("%20", " ");

console.log(filename);
console.log(c1);
console.log(c2);
console.log(c3);
console.log(hashPart);

var content = c1 + "\n" + c2 + "\n" + c3 + "\n" + hashPart;

fs.writeFile(filename, content, function (err) {
  if (err) throw err;
  console.log("File saved!");
});

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      fs.readFile(filename, "utf8", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          return res.end("File not found");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        var lines = data.split("\n");
        var htmlOutput = lines
          .map((line) => `<h1 style="color: crimson;">${line}</h1>`)
          .join("");

        res.write(htmlOutput);
        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  })
  .listen(3000);
