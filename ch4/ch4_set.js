// use mdn doc to se examples
//Q1
console.log("har\"".length)

//Q2
let sentence = "the quick browm fox jumps over the lazy dog."
let word = "fox"
console.log(sentence.includes(word)) // return true or false
console.log(`the word  "${word}"  ${sentence.includes(word)? 'is': 'is not' } in the sentence`)
// use startwith and end with
//Q3
name = "Afiya"
console.log(name.toLowerCase())

//Q4 // imp
let str = "pls give me $ 1000" 
let amount = Number.parseInt(str.slice("pls give me $ ".length ))   // mean same as  str.slice(15)  will slice from 14 to total length of str
console.log(amount)                                                 // we convert it to no then

//Q5
let friend = "deepika"
console.log(friend)
friend[3]= "a"
console.log(friend)  // will print deepka only bcoz str is immutable