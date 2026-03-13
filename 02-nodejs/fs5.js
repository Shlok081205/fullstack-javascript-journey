//Write a node js cript to write an array of object with properties Cricketer's name and its number in a file name cricket.txt then read the file and display the object

var fs = require("fs");

var cricketers = [
  { name: "Dhoni0", number: "09876543210" },
  { name: "Dhoni1", number: "19876543210" },
  { name: "Dhoni2", number: "29876543210" },
  { name: "Dhoni3", number: "39876543210" },
];

fs.writeFileSync("cricket.txt", JSON.stringify(cricketers));

var data = fs.readFileSync("cricket.txt", "utf8");

var cricketersObj = JSON.parse(data);
console.log(cricketersObj);
