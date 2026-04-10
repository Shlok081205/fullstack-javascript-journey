//Write express js to define 1 json array of 3 objects having properties named name and age of singer , for this object according to age . if user request sorted names in url then all names along with age should be printed according to descending order of age. Display this sorted value on '/sort' and json object on home page.

const express = require("express");
const app = express();

let singers = [
  { name: "Arijit", age: 36 },
  { name: "Shreya", age: 40 },
  { name: "Armaan", age: 28 },
];

app.get("/", (req, res) => {
  res.json(singers);
});

app.get("/sort", (req, res) => {
  let sortedSingers = [...singers].sort((a, b) => b.age - a.age);

  let output = "";
  sortedSingers.forEach((s) => {
    output += s.name + " is " + s.age + " years old. ";
  });

  res.send(output);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
