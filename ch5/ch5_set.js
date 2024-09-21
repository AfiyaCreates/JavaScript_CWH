// //Q1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let a = prompt("enter a no")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// //Q2
// let arr2 = [2, 4, 6, 8, 10, 12]
// let a2  // initialise a2 before the block
// do {
//      a2 = prompt("enter a no")
//     a2 = Number.parseInt(a2)
//     arr2.push(a2)  
// } while (a2 != 0)
//     console.log(arr2)// to run this keep adding no to prompt until 0 then it will print the array

//Q3
let arr3 = [2,5,0,6,10,50,40,55,37]
let a3= arr3.filter((a)=>{
    return a%10==0
})
console.log(a3)

//Q4
let arr4 = [1,2,3,4,5,6]
let a4= arr4.map((value)=>{
    return value*value
})
console.log(a4)

//Q5
let arr5 = [1,2,3,4]
let a5=arr5.reduce((x1,x2)=>{
    return x1*x2
})
console.log(a5)