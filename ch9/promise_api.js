// promise api 6 methods

// different processes are resolving at different time but we want to print their values at same time (together)..we use promise api
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
        // reject(new Error("error 1 found"));
    }, 11000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 2")
        reject(new Error("error 2 found"))

    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 3000)
})

// p1.then((value) => {
//     console.log(value)
// })
// p2.then((value) => {
//     console.log(value)
// })
// p3.then((value) => {
//     console.log(value)
// })

//1. promise.all
// will print an array- the values of the processes at same time(use when all processes are resolved)
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)   
// })

//2. promise.allsettled
//even if one of the process is rejected it prints the rest processes values 
// let promise_all_settled = Promise.allSettled([p1,p2,p3])
// promise_all_settled.then((value)=>{
//     console.log(value)   
// })

//3. promise.race
// it returns the value/error of the promise that settles first -eg here - value 2
// let promise_race = Promise.race([p1,p2,p3])
// promise_race.then((value)=>{
//     console.log(value)   
// })

//4. promise.any
// returns the value(not error) of the process that settles first (ei-it returns the value of the process that is resolved first )
// eg-will return value 3  (run in browser console)
// let promise_any = Promise.any([p1,p2,p3])
// promise_any.then((value)=>{
//     console.log(value)   
// })

//5. promise.resolve
// resolves a promise with the given value
// let promise_resolve = Promise.resolve(6)
// promise_resolve.then((value) => {
//     console.log(value)
// })


//6. promise.reject
//rejects a promise with the given error
// eg-will return new error found (run in browser console)
let promise_reject = Promise.reject(new Error("new error found"))
promise_reject.then((value) => {
    console.log(value)
})



