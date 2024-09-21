console.log("hello afiya")  // will be displayed in console upon inspection
let a = 2
let b = 3
 console.log(a+b)

 console.log(console)  // will give all console methods
 console.log("hey, how are u?")
 console.error("this is an error")
 console.assert(4>5) // to assert a condition  (if wrong then shows assertion failed)
 console.clear() // clears the console

 obj = {
    1:"afiya",
    2:"zara",
    3:"hamza",
    4:"aliya"
 }
 console.table(obj) // creates a table of given obj

 console.warn("dont drink alcohol")
 console.info("hey this is an imp info") // similar to log

 console.time("a")
 console.timeEnd("a") // gives the time taken to complete the proces a from start time
console.time("forLoop") // give the name as string
for(let i =0;i<5;i++){
    console.log("hello")
}
console.timeEnd("forLoop")