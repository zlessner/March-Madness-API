const express = require("express")
const router = express.Router()

const Teams = require('../models/Teams')
const ncaam2019 = require('../../node_modules/bracket-data/data/ncaam/2019')

router.get("/", (req, res) => {
  console.log('received a request on /')
  Teams.find({}).then(allteam => {
  console.log(allteam)
  res.json(allteam)
})
})


module.exports = router

