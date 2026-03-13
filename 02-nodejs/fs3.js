var fs = require("fs");

fs.writeFile("text.txt", "Hello", function (err) {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("err");
  }
  console.log("Write Operation");
});
console.log("Outside");
