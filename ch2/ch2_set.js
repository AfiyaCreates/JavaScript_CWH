//Q1
let age = prompt("what is your age?")
if(age>10 && age<20){
    console.log("your age lies between 10 and 20")
}else{
    console.log("your age doesn't lies between 10 and 20")
}
//Q2
let age2 = prompt("what is your age?")
switch(age2){
    case '12':      // given in string bcoz input gets stored as string 
        console.log("your age is 12")
        break
    case '13':
        console.log("your age is 13")
        break
    case '14':
        console.log("your age is 14")
        break
    case '15':
        console.log("your age is 15")
        break
     default:
        console.log("your age is not special")
}
//Q3
let no = prompt("enter a no")
no = Number.parseInt(no) // to convert string to int 
if(no%2==0 && no%3==0){
    console.log("no is divisible by 2 and 3")
}else{
    console.log("no is  not divisible by 2 and 3")
}
//Q4
let nos = prompt("enter a no")
nos = Number.parseInt(nos) // to convert string to int 
if(nos%2==0){
    console.log("nos is divisible by 2 ")
}
else if (nos%3==0){
     console.log("nos is  divisible by  3")
}
    else{
    console.log("nos is  not divisible by 2 or 3")
}
Q5 //imp
let age3=12
let a = age3>18? "you can drive":"you cannot drive"
console.log(a)