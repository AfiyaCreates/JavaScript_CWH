// the game should ask u to enter S W or G . the comp should be able to randomly generate S W or G and declare win or loss using alert
// use alert, prompt and confirm wherever required
let user = prompt("chosse S,W or G")
let comp_index = Math.floor(Math.random() * 3) // will give 3 random  values as int 0 1 2
let comp = ["S", "W", "G"][comp_index]  // will return arays element at particular value of comp acting as index
// creating a function lets name it as match
const match = (comp,user) => {
    if (comp == user) {
        return "tie"
    }
    else if (comp == "S" && user == "W") {
        return "comp"
    }
    else if (comp == "S" && user == "G") {
        return "user"
    }
    else if (comp == "W" && user == "S") {
        return "user"
    }
    else if (comp == "W" && user == "G") {
        return "comp"
    }
    else if (comp == "G" && user == "S") {
        return "comp"
    }
    else if (comp == "G" && user == "W") {
        return "user"
    }
}
let win = match(comp,user)
console.log(`the user is ${user} and comp is ${comp} /n winner is: ${win}`)