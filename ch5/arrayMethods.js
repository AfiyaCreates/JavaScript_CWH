let num =[1,56,33,89,90]
let b = num.toString()
console.log(num)
console.log(b) 

let c = num.join("_")  // joins array elements using the given operator
console.log(c, typeof c)

let r  = num.pop()    // removes the last value  and returns it
console.log(num , r)

let s = num.push(44)    // adds element to array and returns the new length of array
console.log(num , s)

let t  = num.shift()    // removes the first element and returns it  
console.log(num , t)

let u  = num.unshift(100)    // adds an element at  the begining of the array and returns the new length of array  
console.log(num , u)