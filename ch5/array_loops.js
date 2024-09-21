let num = [2,4,6,8,9]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}
// using for each
num.forEach((element)=>{
    console.log(element*element)
})

// array.from
let name = "harry"
let arr= Array.from(name)
console.log(arr)// creates an array from the string or from collection etc

// for..of
for(let i  of num){
    console.log(i)   // i not num[i]
}  

// for..in
for(let i  in num){
    console.log(i , num[i])   // i not num[i]    // i  kind of return te keys/index   // num[i] returns its value 
}  