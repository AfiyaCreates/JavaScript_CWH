// it is the solution to callback hell problem 
// resolve give value....reject gives error

let promise = new Promise(function(resolve,reject){
alert("i am an alert in promise")
resolve(56)
})

console.log("hello")
setTimeout(() => {
    console.log("my name is afiya.....after 2 sec ")
}, 2000);
console.log("hello 2.O")

console.log(promise)  // return 56

// fetch google.com homepage---> console.log("google.com home page done")
//fetch data from data api
// fetch pictures from the server
// print downloading
// rest of the script

// if we want first 3 lines to work parallel and then rest of the script so we use promise