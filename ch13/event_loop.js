// what is js 
// single threaded, non blocking ,asynchronous
// heap - used for memory allocation ...stack - holds execution context 
// js runtime can do only one ting at a time

//task queue
//js do one thing at a time ..so rest tasks are placed in task queue waiting to be executed

//event loop
//it pushes the tasks from the task queue to call stack

setTimeout(function timer(){
console.log("you clicked the button ")
},2000)

console.log("hi")

setTimeout (function timeout (){
    console.log("click the button")
},5000)

console.log("welcome to saturn")
