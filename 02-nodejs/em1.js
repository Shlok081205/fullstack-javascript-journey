// write a node js program using the events module to simulate a sequence of events
// 1. when a connection event occure print "Connection successfully" and trigger a data received event
// 2. when the data received event occure print "Data received Successfully "
// 3. finally print "Thanks" at the end of the execution

const ee=require('events');
const e1=new ee();

e1.on("connection",()=>{
    console.log("Connection successfully");
    e1.emit("dataReceived");
});
e1.on("dataReceived",()=>{
    console.log("Data received Successfully");
});
e1.emit("connection");
console.log("Thanks");