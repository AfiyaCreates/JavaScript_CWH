const sayHello = name => console.log("Hello " + name)
sayHello("Harry")

const sayHello2 = (name, greet) => console.log(greet + " " + name)
sayHello2("Harry", "Good night")

//// imp ***
// const x = {
//     name: "afiya",
//     role: "ml engineer",
//     exp: 30,
//     show: function () {
//         // console.log(`the name is ${this.name}`) // returns name as afiya
//         // `this` refers to the current object `x` here.
//         // So, `this.name` will correctly refer to "Afiya".

//         // To prevent issues inside the inner function, we store `this` in a variable `that`.
//         that = this // here this is obj x
//         setTimeout(function () {
//             // Inside this function, `this` now refers to the global/window object, not object `x`.
//             // So, `this.name` would return `undefined`.
//             // To fix this, we use `that`, which we stored earlier and still refers to object `x`.

//             // console.log(`the name is ${this.name}`) // returns name as undefined...coz for this func this is a window obj 
//             console.log(`the name is ${that.name}`) // to fix this we store this ...in another variable outside function 

//         }, 2000)
//     }
// }
// x.show()



// Instead of using `that`, we can simply use an arrow function in `setTimeout`.
// Arrow functions do not have their own `this`, they inherit `this` from the surrounding scope.
const x = {
    name: "afiya",
    role: "ml engineer",
    exp: 30,
    show: function () {
        setTimeout(() => {
            console.log(`the name is ${this.name}`)
        }, 2000)

    }
}
x.show() 
