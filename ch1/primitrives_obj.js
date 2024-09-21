// primitive data types- N N S S B B U - null number symbol string boolean bigint undefined
let a = null
let b = 345
let c = true
let d = BigInt("567")+BigInt("3")
let e = "harry"
let f = Symbol("I am a nice symbol")
let g = undefined   // similar to let g
console.log(a,b,c,d,e,f,g)
console.log(typeof d)


// obj in js- non primitive data type
const item = {
    "harry":true, // not necessary to write the keys like harry afiya etc in double quote
    "afiya":false,
    "rohan":67,
    "zara": undefined
}
console.log(item["harry"])
 