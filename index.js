const express = require('express')
const app = express()
const teamsController = require('./db/controllers/teams')
const tournamentController = require('./db/controllers/tournament')
const bodyParser = require('body-parser')
const ncaam2019 = require('./node_modules/bracket-data/data/ncaam/2019')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//redirects to api/people page when people entered in URL
app.use('/people', (req,res) => {
	res.redirect('/api/teams/')
})

app.use('/api/ncaam2019/', teamsController)
app.use('/api/tournament/', tournamentController)

app.listen(2500, () => console.log('They see me rollin...on port 2500...'))
