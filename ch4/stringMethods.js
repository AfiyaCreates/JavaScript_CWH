// strings are immutable canoot be changed
let name  = "harry"
console.log(name.length)    // length is a property so no ()
let friend = "jaza\'"    // length will be 5 bcoz escape seq is treated as single character 
console.log(friend.length)    

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))   // extract 2-3 character leaving the 4th one
console.log(name.slice(2))  
console.log(name.replace("har","per"))  
console.log(name.concat(" is a friend of " , friend))   // strings can be concat using + also
console.log(name + "sir")
let friend2 = "      meena      "
console.log(friend2.trim())
