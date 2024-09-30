// the process inside the promise gets executed in the background and we get notified about it
// promises are executed prallely
let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        // console.log('i am a promise and i am resolved')   // this msg gets printed 
        resolve(true) // if accepted give value (in this its boolean true )
    })
}, 5000)


let p2 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
        // console.log('i am a promise and i am rejected')   // this msg gets printed 
        reject(new Error("i am an error")) // if rejected will throw error 
    }, 5000)

})

console.log(p1, p2)  // gives the status

// takes final result of promise through catch or then 
// .then()
p1.then((value) => {
    console.log(value)  // prints the value after p1 is resolved...in this will return true
})

//if p2 process gets resolved return the value or if it gets rejeted then returns the error (catches the error)
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})


//.catch()
// p2.catch((error)=>{
//     console.log("some error occurred in p2") //catches and prints ...error..we dont get the error since we cathed it  
// })
 
