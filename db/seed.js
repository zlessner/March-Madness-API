const mongoose = require('./connection')
const Teams = require('./models/Teams')
const Tournament = require('./models/Tournament')
const ncaam2019 = require('../node_modules/bracket-data/data/ncaam/2019')
const tourney2019 = require('./5382019')

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

    Tournament.create(tourney2019).then((createTournament) => {
        console.log(createTournament)
    })
