// see the rules on site - regexr.com

// const regex= "" // only first occurence of very will be changed ...
const regex = /very/g // will replace very globally
const text = "Guddu is a very very awesome very very nice girl"
console.log(text.replace( regex,"VERY"))
