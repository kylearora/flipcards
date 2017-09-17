const express = require("express")
const router = express.Router()
const models = require("../models")


//not sure if correct
router.get("/decks", function (req,res){
  models.decks.findAll()
  .then(function(decks){
    res.json(decks)
  })
})

router.post("/decks", function(req, res){
  const newDeck = models.decks.build({
    topic: req.body.topic,
    //link to foreign key here
  })
  newDecks.save()
  .then(function(deck){
    res.json({success: true})
  })
})




module.exports = router
