// a closure is when a function "remembers" and has access to the variables from its outer scope, even after that outer function has finished executing.

//examplke 1
message = "good global"
function hello1(){

    message = "good morning"
    {
       let message = "good afternoon"
        console.log("hello1:" + message)
    }
    function hello2(){
        console.log("hello2:" + message)
    }
    return hello2 
}
p= hello1()  // since its returning avlaue we need a var to store it 
p() 

//example 2
function returnfun(){
    const x = ()=>{
        let a=1
        console.log(a)
    
        const y = ()=>{
            let a = 2
            console.log(a)
    
            const z =()=>{
                let a = 3
                console.log(a)
            }
            z()
        }
        y()
    }  

    return x
}

let q = returnfun()
q()