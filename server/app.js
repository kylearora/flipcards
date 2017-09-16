const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
app.use(express.static('public'))
app.use(bodyParser.json())


const mainRoute = require("./routes/mainRoute")
app.use(mainRoute)

app.listen (3000, function(req, res){
  console.log("Flippin' Knowledge");
})
