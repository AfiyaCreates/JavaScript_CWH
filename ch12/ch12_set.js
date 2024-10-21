// Q1
// const a = async (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, 2000);

//     })
// }

// (
//     async () => {
//         let text1 = await a("hello1")
//         console.log(text1)
//         let text2 = await a("hello2")
//         console.log(text2)
//     }
// ) ()

//Q2
function sum(a,b,c){
    return a+b+c
}

let x =[1,3,5]
console.log(sum(...x))

//Q3

// const b =  (text,n=2) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text)
//         }, n*1000);

//     })
// }

// (
//    async () => {
//         let text = await b("I am mikasa")
//         console.log(text)
//     }
// ) ()

//Q4
function SI(p,r,t){
    return (p*r*t)/100
}
console.log(SI(1000,5,1))
