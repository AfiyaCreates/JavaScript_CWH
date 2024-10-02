// we can make any function async and wrap a promise in it 
//can  use .then with the async func to return the promise 

// async function harry() {
//     return 5
// }
// harry().then((x)=>{
//     alert(x)
// })

async function weather() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000)
    })
    let bangloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 5000)
    })

    // delhiweather.then(alert)
    // bangloreweather.then(alert)
    console.log("fetching delhi weather pls wait...")
    let delhiW = await delhiweather  // first this fulfills(resolve/reject) and value gets stored in delhiW then it moves to next line 
    console.log('delhi weather:', delhiW)

    console.log("fetching banglore weather pls wait...")
    let bangW = await bangloreweather
    console.log("bangalore weather:", bangW)

    return [delhiW, bangW]
}

console.log("welcome to weather control room ")
let a = weather()  // returns the promise
a.then((value)=>{
    console.log(value)
})


