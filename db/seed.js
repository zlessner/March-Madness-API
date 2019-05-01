const mongoose = require('./connection')
const Teams = require('./models/Teams')
const fiveThreeTournament = require('./models/538Tournament')
const popPicksTournament = require('./models/PopPicks')
const ncaam2019 = require('../node_modules/bracket-data/data/ncaam/2019')
const tourney2019 = require('./5382019')
const popPicks2019 = require('./PopPicks2019')

// clear the database of records using both models

Teams.deleteMany({}).then(() => {
    console.log('deleted all teams')
    // Tournament.deleteMany({}).then(() => {
    //   console.log('deleted all shows') 
     })
    //})

    Teams.create(ncaam2019).then((createTeams) => {
        console.log(createTeams)
    })

    fiveThreeTournament.create(tourney2019).then((createTournament) => {
        console.log(createTournament)
    })

    popPicksTournament.create(popPicks2019).then((createTournament) => {
        console.log(createTournament)
    })
