let num = [1,2,3,4,5,6,7,8,9]
delete num[0]  // del is an operator
console.log(num , num.length) // deletes the element but length of array remains same   

let num2 = [10,11,12,13,14,15]
let new_array = num.concat(num2) // creates new array does not change existing array
console.log(new_array)

let num3 = [20,40,60,80,100]
let new_array_2 = num.concat(num2,num3) // it can add more than one array   // creates new array does not change existing array
console.log(new_array_2)   

//sort
let a = [34,78,98,55,3,5]
a.sort()   // modifies the original array   // it sorts alphabetically and not acc to no  ...it sorts like a string
console.log(a)
// The function that you pass tells how to sort the elements. It takes two parameters (a and b) that represent any two elements from the array. How the elements will be sorted depends on the function’s return value:
// if it returns a negative value, the value in a will be ordered before b.
// if it returns 0, the ordering of a and b won’t change.
// if it returns a positive value, the value in b will be ordered before a.
let compare=(a,b)=>{
return a-b    // a-b ascending order     b-a descending order
}
a.sort(compare)
console.log(a)

// reverse
let p = [56,243,77,90]
p.reverse()  // reverses the array order
console.log(p)

//splice and slice
//num.Splice(index,no_of_Elements,elements,..,..) 
let k = [66,56,88,95,35,99,89,100]  // del 3 elements from index 2 and add the given elements  . also returns the deleted values
let l = k.splice(2,3,11,12,13) // changes the original array
console.log(k,l)
//slice  - slices out a piece of an array and creates a new array
let no = [23,55,67,98,36,90,100]
let new_no = no.slice(3,6)   // give element from index 3 to 5
console.log(new_no)
