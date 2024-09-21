let marks = [91,56,87,67,false,"not given"]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[4]) 
console.log(marks[6]) // 6 does no exist so undefined

console.log("length of array is ",marks.length)
marks[6]=99 // adding new value to array
marks[1]= 60 // changing te value of an array      // arrays are mutable and can be changed 
console.log(marks)
console.log(typeof marks) // arrays are objects