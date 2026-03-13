// Write Data to File,Append Data to File,Read Data from the file using call back

var fs = require("fs");

fs.writeFile("text.txt", "Hello", function (err1) {
  if (err1) {
    console.log("Error Write: " + err1);
  } else {
    fs.appendFile("text.txt", " World", function (err2) {
      if (err2) {
        console.log("Error Append: " + err2);
      } else {
        fs.readFile("text.txt", "utf-8", function (err3, data) {
          if (err3) {
            console.log("Error Read: " + err3);
          } else {
            console.log("Read Successfully:", data);
          }
        });
        console.log("Append Successfull");
      }
    });

    console.log("Write Successfull");
  }
});

