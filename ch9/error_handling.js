setTimeout(()=>{
    console.log("hacking wifi...please wait")
},1000)

// console.log(rahul) // error - rest code after this wont run 
// so we use try and catch 
// only synchronous code will be handled inside try ... so wont work if we use settimeout inside the try block 
try{
    console.log(rahul)
}catch(error){  // variable error contains error obj 
    console.log("error found:", error)
}

setTimeout(()=>{
    console.log("fetching username and password...please wait")
},2000)

setTimeout(()=>{
    console.log("hacking Rahul's facebook id...please wait")
},3000)

setTimeout(()=>{
    console.log("username and password of Rahul fetched...please wait")
},4000)