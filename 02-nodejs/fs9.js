//Write a node js program to create a file name exam.txt containing the inital text exam attempt then it should add  three more lines 1.Entry 1:Pass 2.Entry 2:Fail 3.Entry:Pass . After writing  the program must read the file and count .How many times the word pass appers and if the word pass apprers 3 or more times the program should erase the content inside exam.txt

const { count } = require("console");
var fs = require("fs");

fs.writeFileSync("exam.txt", "");
fs.appendFileSync("exam.txt", "Entry 1:Pass\nEntry 2:Fail\nEntry:Pass");

text = fs.readFileSync("exam.txt").toString("utf-8").split("\n");
counting = 0;
for (i in text) {
  if (text[i].split(":")[1] == "Pass") {
    counting++;
  }
}

if (counting >= 3) {
  fs.writeFileSync("exam.txt", "");
}else{
  console.log("Count:"+counting)
}
