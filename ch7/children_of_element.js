console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes) // its a node list 
let arr = Array.from(document.body.childNodes)// to convert it into array
console.log(arr)
// text in console is for text or space if left any between the elements