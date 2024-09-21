//Q1
const canDrive = (age) => {
    return age >= 18 ? true : false
}
runAgain = true
while (runAgain) {

    let age = prompt("enter your age")
    age = Number.parseInt(age)

    if (age < 0) {
        //Q3
        console.error("wrong input")
        break  // to break through this one iteraton 
    }
    if (canDrive(age)) {  // using function canDrive()
        alert("you can drive!")
    }
    else {
        alert("you cannot drive")
    }
    //Q2
    runAgain = confirm("do u want to play again?")  // if person says no it means false

}

//Q4
let no = prompt("enter a no")
no = Number.parseInt(no)
if(no>4){
    location.href= "https:/google.com"
}

//Q5
let col = prompt("enter color")
document.body.style.background = col