// Function declarations are hoisted to the top of their scope.
// This means we can call the function `greet()` even before its declaration.
// greet()  
function greet(){
    console.log("good morning")
}
greet()

// Variable declarations using `var` are also hoisted, but only the declaration.
// console.log(a)// we are defining it later still it wont throw error ..but its value will remain undefined
var a =9 
console.log(a) // declaration hoisted to top but initialization doesnt 

// For `let` and `const`, the declaration is hoisted but not the initialization.
// This leads to the concept of a "Temporal Dead Zone (TDZ)" where accessing the variable before initialization throws an error.
// console.log(b)
let b = 5

// function expressions and class expressions are not hoisted 
// greet2()
var greet2=()=>{
    console.log("have a great day")
}
greet2()
