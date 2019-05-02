const express = require("express")
const router = express.Router()

const PopPicks = require('../models/Pop-Picks')

router.get("/", (req, res) => {
  console.log('received a request on /')
  PopPicks.find({}).then(picks => {
  console.log(picks)
  res.json(picks)
})
})


module.exports = router
