// it wasnt running but its fine if u understand

// what npm install do ?

// When you run `npm install`, it does three main things:

// 1. **Gets the Stuff You Need**: It looks at a list of things your project needs (like tools or libraries) and gets them from the internet.
// 2. **Puts It in the Right Place**: It puts all these tools and libraries in a special folder called `node_modules` in your project, so your project can use them.
// 3. **Keeps Track of Everything**: It creates a file that keeps track of all the exact versions of the tools it installed, so everything works the same on other computers.

// It's like getting a LEGO set with instructions—you need to have all the right pieces (tools/libraries) and know how they fit together (dependencies) to build your project. 😊

// nmp install means, It checks inside package.json for all the dependencies and installs it
// npm install ka mtlb hai ki aap ke liye node js package.json me jhakega aur  wo dependencies ko install kar ke node_modules folder bnaeg

console.log("hello good morning")
// npm init -y - creates a package.json file ....contains all info related to proj
// now this file will help to install and use third party modules eg - pdf converter etc
// search node js modules for pdf and copy the nppm code ...and paste it on terminal 
// a new file node_modules gets created that stores all the third party packages...ei it will store the dependencies
// npm install - 
// create html file 
// now copy code of pdf converter and paste the html part in html file and rest in js



// Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("template.html", "utf8");
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "tom",
      age: "21",
    },
    {
      name: "dick",
      age: "23",
    },
    {
      name: "harry",
      age: "29",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "pdf",
  };
  // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.
// console.log(pdf.create)
  pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });







