//Q1
 let marks = {
    afiya:89,
    zara:67,
    hamza:54,
    faiza:68
 }
// for(let i =0;i<Object.keys(marks).length;i++){
//    console.log("the marks of "+ Object.keys(marks)[i]+ " are "+ marks[Object.keys(marks)[i]])
//}
// we used objects.keys() to get the keys index and its length 
//  we see marks[key] = value

// Q2
// using for in 
 for(let i in marks){
    console.log("marks of "+i+ " are "+ marks[i])
 }

// Q3
let cn =43
let i  // initialization
while(i!=cn){
    i = prompt("enter a no")    //check hoe to run prompt
    console.log("try again")
} 
console.log("you hv entered the correct no")

//Q4
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(1,4,5,6))