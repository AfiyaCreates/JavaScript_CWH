// the finally clause runs in all cases
// finally used like in case where there is an error in catch block too
// even if we add try catch in a function and return it before the finally block still the code inside the finally gets executed

const f =()=>{
    try{
        let a = 5;
        // console.log(program) //error
        console.log("program ran successfully")   // since error occured in above line this wont run 
        return 

    }catch(err){
        console.log("this is an error")
        console.log(p)//error
    }
    
    finally{
        console.log("i am a good girl ")   // this still gets executed
    }
}

f()
console.log("end")