let a = 1
let b =2
let c=3
function onePlusAvg(x,y){
    return 1+(x+y)/2
}
console.log(onePlusAvg(a,b))
console.log(onePlusAvg(b,c))
console.log(onePlusAvg(a,c ))

// another syntax for function
const sum=(p,q)=>{
return p+q
}
console.log("sum is "+sum(5,3))
// function without parameter
const msg=()=>{
    console.log("hello how are you?")
}
msg() // to call the func without parameter