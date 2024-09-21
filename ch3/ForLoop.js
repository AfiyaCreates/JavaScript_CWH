// loops in js 
// for ,for in , for of, while,do while
let sum =0
let n = prompt("enter the value of n")
 n =Number.parseInt(n)   // to convert str to int
for (let i=0;i<n;i++){ // its let not int 
    sum +=i
}
console.log("sum of first "+ n +"natural no is" + sum)

//for in loop
let obj ={
    afiya:87,
    zarah:90,
    hamza:78,
    aliya:80
}
for (let a in obj){ // keep syntax in mind
    console.log("marks of "+a+"are "+obj[a])
}

// for of loop
for(let b of "harry"){
    console.log(b)
}