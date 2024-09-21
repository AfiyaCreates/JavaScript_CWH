let number = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
let no = prompt("guess the no")
no = Number.parseInt(no)
let chances = 0
// keep asking for no until correct no is guessed and increment the chances variable
while(no!=number){

    chances++
    if(no<number){
        console.log("your no is smaller")
        let no = prompt("guess the no")
    }
    else if(no>number){
        console.log("your no is greater")
        let no = prompt("guess the no")
    }
    no = prompt("guess the no")
    no = Number.parseInt(no)
}
// after the guess is done print 100 - no of chances = score
console.log("Correct guess!!!")
console.log("your score is = ", (100-chances))
