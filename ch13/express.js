// not running
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.query)
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about')
})

app.listen(port, () => {
  console.log(`Example app listening on port https://localhost:${port}`)
}) 

// global package- nodemon
//npm i -g nodemon .....to install it globally in every package
