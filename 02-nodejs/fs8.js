//Write a node js cript to copy content of one file to another file.Data Should be fetched from source.txt and insert to destination.txt and read data from destination file at the end.All these task Asynchronously


var fs = require("fs");

// 1. Write to source.txt
fs.writeFile("source.txt", "Hi How are you", function (err1) {
  if (err1) {
    console.log("Error Write Source: " + err1);
  } else {
    console.log("Source file created.");

    // 2. Read from source.txt
    fs.readFile("source.txt", "utf-8", function (err2, data) {
      if (err2) {
        console.log("Error Read Source: " + err2);
      } else {
        
        // 3. Write data to destination.txt
        fs.writeFile("destination.txt", data, function (err3) {
          if (err3) {
            console.log("Error Write Destination: " + err3);
          } else {
            console.log("Data copied to destination.");

            // 4. Read from destination.txt at the end
            fs.readFile("destination.txt", "utf-8", function (err4, finalData) {
              if (err4) {
                console.log("Error Read Destination: " + err4);
              } else {
                console.log("Read from Destination: " + finalData);
              }
            });
          }
        });
      }
    });
  }
});

fs.copyFile("source.txt","destination.txt",function(err){
  if (err){
    console.log("Error: " + err);
  }
  else{
    console.log("File Copied")
    fs.readFile("destination.txt","utf-8",function(err1,data){
      if(err1){
        console.log("Error: " + err1);
      }else{
        console.log(data)
      }
    })
  }
})