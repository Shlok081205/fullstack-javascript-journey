// write node js script to create 2 litners for a common event print number of events associated with an emitter 
// remove one of the listener and call remaining listener again
// also print number of remaining listener
// at the end remove all the listeners and print number of listeners remaining

const ee=require('events');
const e=new ee();

function fun1(){
    console.log("Listener 1 executed");
}
function fun2(){
    console.log("Listener 2 executed");
}
e.on("myevent",fun1);
e.on("myevent",fun2);

console.log("Number of listeners for myevent: "+e.listenerCount("myevent"));

e.removeListener("myevent",fun1);
console.log("Number of listeners for myevent after removing one listener: "+e.listenerCount("myevent"));

// e.emit("myevent");

e.removeAllListeners("myevent");
console.log("Number of listeners for myevent after removing all listeners: "+e.listenerCount("myevent"));