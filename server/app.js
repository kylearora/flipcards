const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
app.use(express.static('public'))
app.use(bodyParser.json())


const users = require("./routes/users")
app.use(users)

const login = require("./routes/login")
app.use(login)

const decks = require("./routes/decks")
app.use(decks)

const cards = require("./routes/cards")
app.use(cards)

app.listen (3000, function(req, res){
  console.log("Flippin' Knowledge");
})
