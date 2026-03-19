// create a node js program using events module
// 1. registering multiple event listeners for different events(myevent1,myevent2)
// 2. removing a specific event listener for myevent2
// 3. removing all event listeners associated with myevent1
// 4. triggering the events and observing which listeners are executed

const ee=require('events');
const e=new ee();

function fun1(msg){
    console.log("Message from fun1: "+msg);
}
function fun2(msg){
    console.log("Message from fun2: "+msg);
}
e.on("myevent1",fun1);
e.on("myevent1",fun2);
e.on("myevent2",fun1);
e.on("myevent2",fun2);
// removing a specific event listener for myevent2
e.removeListener("myevent2",fun2);

// removing all event listeners associated with myevent1
e.removeAllListeners("myevent1");
console.log("Triggering myevent1:");
e.emit("myevent1","Hello from myevent1");
console.log("Triggering myevent2:");
e.emit("myevent2","Hello from myevent2");