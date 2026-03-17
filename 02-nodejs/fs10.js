//Write nodejs to write the text "You are creating a File" to help.txt after that append the text."You are appending data" to help.txt file.Read the file and print the content on the console.After Finishing read opration copy the content of help.txt file to help2.txt file after fininshing copy operations print the line "Thanks for using this program "on console.

var fs = require("fs");

fs.writeFile("help.txt", "You are creating a File", function (err1) {
  if (err1) {
    console.log("Error: " + err1);
  } else {
    fs.appendFile("help.txt", "\nYou are appending data", function (err2) {
      if (err2) {
        console.log("Error: " + err2);
      } else {
        fs.readFile("help.txt", "utf-8", function (err3, data) {
          if (err3) {
            console.log("Error: " + err3);
          } else {
            console.log("File Content:\n" + data);
            fs.writeFile("help2.txt", data, function (err4) {
              if (err4) {
                console.log("Error: " + err4);
              } else {
                console.log("Thanks for using this program");
              }
            });
          }
        });
      }
    });
  }
});
