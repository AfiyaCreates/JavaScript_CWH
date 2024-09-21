//alert
alert("hello your js works!!!")
alert("write a msg ")
let msg = prompt("enter msg here", "default msg")  

// confirm 
let write = confirm ("do u want to write to this page?")
if(write){
    document.write(msg)
}
else{
    document.write("pls allow me to write")
}
