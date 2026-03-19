// write node js script to handle events as asked below
// 1. check the radius is negative or not if negative then display radius must be positive else calculate the perimeter of circle
// 2. check side is negative or not if negative then display side must be positive else calculate the perimeter of square

const ee=require('events');
const e=new ee();

function calculateCirclePerimeter(radius){
    if(radius<0){
        console.log("Radius must be positive");
    }else{
        let perimeter=2*Math.PI*radius;
        console.log("Perimeter of circle: "+perimeter);
    }
}

function calculateSquarePerimeter(side){
    if(side<0){
        console.log("Side must be positive");
    }else{
        let perimeter=4*side;
        console.log("Perimeter of square: "+perimeter);
    }
}

e.on("circle",calculateCirclePerimeter);
e.on("square",calculateSquarePerimeter);

e.emit("circle",-5);
e.emit("circle",10);
e.emit("square",-3);
e.emit("square",5);