// Event Module
// const eventemitter=require('events');

// create an event emitter object
// const ee=new eventemitter();

// create an event listener
// on/addListener works same
// ee.on(event,listener);
// ee.addListener(event,listener);
// ee.emit(event,[args1],[args2],...[argsN]);

//to remove a specific event listener
// ee.removeListener(event,listener);

// to remove all event listeners for a specific event
// ee.removeAllListeners(event);

// to get the number of listeners for a specific event
// ee.listenerCount(event);

/*
const myevent=require('events');
const e1=new myevent();

e1.on("greet",()=>{
    console.log("Hello, Good Morning!");
});
e1.emit("greet");
*/

const ee=require('events');
const { start } = require('repl');
const e2=new ee();

e2.on("front",(start,end)=>{
    console.log(`Started from ${start} to ${end}` )
});
e2.emit("front",1,100);