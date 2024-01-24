const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', function (req, res) {
    
  res.send('Hello World from Express')
})

app.get('/', function (req, res) {
    
  res.sendFile(__dirname+'/index.html')
})

//app.listen(3000)

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})