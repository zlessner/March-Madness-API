const express = require('express')
const app = express()
const teamsController = require('./db/controllers/teams')
const fiveThreeController = require('./db/controllers/538tournament')
const popPicksController = require('./db/controllers/popPicks')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//redirects to api/ncaam page when basketball entered in URL
app.use('/basketball', (req,res) => {
	res.redirect('/api/ncaam2019/')
})

app.use('/api/ncaam2019/', teamsController)
app.use('/api/538Tournament/', fiveThreeController)
app.use('/api/popPicksTournament/', popPicksController)

app.listen(2500, () => console.log('They see me rollin...on port 2500...'))
 