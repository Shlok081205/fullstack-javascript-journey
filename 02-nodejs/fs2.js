//Read Data From FIle and Arrange that data in ascending order

var fs = require("fs");

text = fs.readFileSync("sample.txt").toString("utf-8");
arr = text.split(" ");
sorted = arr.sort((a, b) => a - b);
console.log(sorted);
