const express = require("express")
const router = express.Router()
const models = require("../models")
const bcrypt = require("bcryptjs")

//not sure if correct way to authenticate login
router.post("/login", function (req, res){
  const username = req.body.username
  const password = req.body.password
  let users = models.users

  users.find({
    where: {
      username: username
    }
  })
  .then(function(user){
    if(!user) {
      //not sure what to respond with here
      res.json({success: false})
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        req.session.user = user
      } else {
        //not sure what to respond with here
        res.json({success: false})
      }
    }
  })
})



module.exports = router
