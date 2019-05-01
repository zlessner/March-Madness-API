const express = require("express")
const router = express.Router()

const Tournament = require('../models/Tournament')

router.get("/", (req, res) => {
  console.log('received a request on /')
  Tournament.find({}).then(allTournament => {
  console.log(allTournament)
  res.json(allTournament)
})
})


module.exports = router
