//map method - returns a new array 
// creates a new array by performing some operation on each array element
// the difference between map and for ech is that map creates a new array
// we can give (value,index,array)  arguments to bothy map and for each loop
console.log("map method")
let arr =[45,67,9,23]
console.log(arr)

let a = arr.map((value)=>{   
    console.log(value)  // maps each element in arr
    return value + 1   // add 1 to each element and store in new array a

})
console.log(a)


let a2 = arr.map((value, index,array)=>{   
    console.log(value,index,array)  // maps each element in arr
    return value + 1   // add 1 to each element and store in new array a

})
console.log(a2)


// filter method-returns a new array
console.log("filter method")
let arr2 = [8,24,16,7,9,78,3]
let a3 = arr2.filter((a)=>{
    return a<10  // conditon comes inside the  block
})
console.log(a3)

// reduce method - returns a value
console.log("reduce method")
let arr3  = [1,2,3,5,2,1]
let a4 = arr3.reduce((h1,h2)=>
    {
    return h1+h2  // take first 2 values add them and add the result with next value and so on...
})
console.log(a4)
// we can also write this as
const reduce_func =(h1,h2)=>  // simply creating a function 
    {
    return h1+h2  
}
let newarr= arr3.reduce(reduce_func)  // calling that func for reduction so use .reduce() to call
console.log(newarr)

