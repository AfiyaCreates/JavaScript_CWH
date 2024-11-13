// // there are 2 modules in node js - coomon js , ES6
// in package.json add type = module to run this 
// // we are able to use the functon of other file using module

// // common js

// // const hello = require("./module1")
// const {hello, hello2} = require("./module1")
// hello()
// hello2("zara")
// hello2("aliya")
// hello2("hamza")


// ES6
import harry, {hello, hello2} from "./module2.js"
hello()
hello2("maviya")
hello2("yusra")
hello2("sara")
harry()
