// // error obj methods- error.name   error.message   error.stack
// try{
//     harry //will give error 
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }

// custom error -  using throw keyword
// try{
//     throw new ReferenceError("custom error")// give custom error 
// }catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }

// error.stack
// try {
//     console.log(harry);  // This will throw an error because 'harry' is not defined.
//     throw new ReferenceError("custom error");  // This line won't run because the previous line throws an error first.
// } catch (error) {
//     console.log(error.name);    // type of error, e.g., 'ReferenceError'.
//     console.log(error.message); //  error message, which describes what went wrong.
//     console.log(error.stack);   //  stack trace, showing where the error occurred in the code.
// }


//custom error 
// (run in browser)
try{
    let age = prompt("enter your age")
    age = Number.parseInt(age)
    if(age>150){
        throw new Error("this is probably not true")
    }
}catch(error){
    console.log(error.name)
    console.log(error.message)
}
console.log("the script is still running")