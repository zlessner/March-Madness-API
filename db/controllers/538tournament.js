const express = require("express")
const router = express.Router()

const fiveThreeTournament = require('../models/538Tournament')

router.get("/", (req, res) => {
  console.log('received a request on /')
  fiveThreeTournament.find({}).then(fiveThree => {
  console.log(fiveThree)
  res.json(fiveThree)
})
})


module.exports = router
