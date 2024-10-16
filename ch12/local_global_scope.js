//local scope
{ 
    // let a =56 // block scope ..error
    var b = 6 // global scope ...no error
}
// console.log(a) 
console.log(b)


//function scope
function f(){
    let c = 8   // function scope
    console.log(c)
}
f()
// console.log(c) // error ...function scope


// global scope
let p = 9
function f2(){
    console.log(p)  // p has global scope
}
f2()