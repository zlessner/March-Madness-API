const express = require("express")
const router = express.Router()

const Teams = require('../models/Teams')

router.get("/", (req, res) => {
  console.log('received a request on /')
  Teams.find({}).then(allteam => {
  console.log(allteam)
  res.json(allteam)
})
})


module.exports = router

