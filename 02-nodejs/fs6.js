//Create a json object which contains array of Objects calculate perimenter of square and perimeter of circle by using unsignedvalue and diameter value respectively write object as well as perimeter in shape.txt

shape = [
  {
    name: "Square",
    side: 8,
  },
  {
    name: "Circle",
    diameter: 10,
  },
];

var fs = require("fs");

fs.writeFileSync("shape.txt", JSON.stringify(shape));

data = JSON.parse(fs.readFileSync("shape.txt"));

circle = data[1].name + " " + (data[1].diameter / 2) * 2 * 3.14;
square = data[0].name + " " + data[0].side * 4;

fs.appendFileSync("shape.txt", ("\n"+circle + "\n" + square));
